// import { ReactComponent as Report } from './../../images/icon-report.svg';
import { React, useState, useEffect } from 'react';
// import ReactStopwatch from 'react-stopwatch';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import {
  enterTimeSpent,
  changeScore,
} from '../../redux/Acts/actsActions';
import { getActInfo } from '../activity-description/data';
import styles from './InProgress.module.css';
// import StopWatch from './StopWatch';
// import Timer from './Timer';
import ControlButtons from './ControlButtons';

const InProgress = ({ score, changeScore, enterTimeSpent }) => {
  let params = useParams();
  let activityID = parseInt(params.actId, 10);
  let activity = getActInfo()[activityID];

  const [is_open, setOpenPopup] = useState(false);
  const closePopup = () => setOpenPopup(false);
  const [is_openConfirm, setOpenConfirm] = useState(false);
  const closePopupConfirm = () => setOpenConfirm(false);

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const newlineText = (text) => {
    const newText = text.split('\n').map(str => <p style={{textAlign: 'left', paddingBottom: '15px', paddingLeft: '20px'}} >{str}</p>);
    return newText;
  }

  return (
    <div>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.score}>Score: {score + activity.points}</div>
        </header>

        <div className={styles.wrapper}>
          <div className={styles.inProgress}>
            <p className={styles.selected}>
              <p id={styles.headerTitle}>{activity.name}</p>
              In Progress
            </p>

            <div
              className={styles.buttonGreen}
              onClick={() => {
                setOpenPopup((is_open) => !is_open);
              }}
            >
              Activity Description
            </div>
            <Popup open={is_open} closeOnDocumentClick onClose={closePopup}>
              <div className={styles.popup}>
                <a className={styles.xButton} onClick={closePopup}>
                  &times;
                </a>
                <div className={styles['popup']}>
                  <section>
                    <p className={styles['popup-header']}>{activity.name}</p>
                  </section>

                  <section className={styles['popup-content']}>
                    <div className={styles['popup-content-section']}>
                      <p className={styles['popup-header']}>Description:</p>
                      <p> {newlineText(activity.description)} </p>
                    </div>

                    <div className={styles['popup-content-section']}>
                      <p className={styles['popup-header']}>Instructions:</p>
                      <p> {newlineText(activity.instruction)} </p>
                    </div>

                    <div className={styles['popup-content-section']}>
                      <p className={styles['popup-header']}>Tips:</p>
                      <p> {newlineText(activity.tips)} </p>
                    </div>
                  </section>
                </div>
              </div>
            </Popup>
          </div>

          <div className={styles['stop-watch']}>
            {/* <Timer time={time} className={styles.timeDisplay}/> */}
            {/* <div className="timer"> */}
            <div className={styles['time-display']}>
              <span className="digits">
                {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
              </span>
              <span className="digits">
                {('0' + Math.floor((time / 1000) % 60)).slice(-2)}.
              </span>
              <span className="digits mili-sec">
                {('0' + ((time / 10) % 100)).slice(-2)}
              </span>
            </div>
            <div className={styles['start-pause-button']}>
              <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
              />
            </div>
          </div>

          <div
            className={styles.buttonGreen}
            onClick={() => {
              setOpenConfirm((is_openConfirm) => !is_openConfirm);
            }}
          >
            End Activity
          </div>
          <Popup
            open={is_openConfirm}
            closeOnDocumentClick
            onClose={closePopupConfirm}
          >
            <div className={styles.actPopup}>
              <p>Are you sure you want to end the activity?</p>
              <div className={styles['confirm-buttons']}>
                <button onClick={closePopupConfirm}> No </button>
                <Link to={`/reflection/reflection/${activityID}`}>
                  <button
                    onClick={() => {
                      changeScore(score + activity.points);
                      enterTimeSpent(time);
                    }}
                  >
                    Yes
                  </button>
                </Link>
              </div>
            </div>
          </Popup>
        </div>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeScore: (score) => dispatch(changeScore(score)),
    // enterTimeStart: (time) => dispatch(enterTimeStart(time)),
    // enterTimeEnd: (time) => dispatch(enterTimeEnd(time)),
    enterTimeSpent: (time) => dispatch(enterTimeSpent(time)),
  };
};

const mapStateToProps = (state) => {
  return {
    score: state.acts.score,
    timeStart: state.acts.timeStart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InProgress);
