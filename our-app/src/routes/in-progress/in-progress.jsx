// import { ReactComponent as Report } from './../../images/icon-report.svg';
import { React, useState } from 'react'
import ReactStopwatch from 'react-stopwatch';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { enterTimeStart, enterTimeEnd } from '../../redux/Acts/actsActions';
import { getActInfo } from '../activity-description/data';
import styles from './InProgress.module.css';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back-arrow-to-first-track-svgrepo-com 1.svg';
import { ReactComponent as Help } from './../../images/help-button.svg';


const InProgress = ({ enterTimeEnd, enterTimeStart, score }) => {
  let params = useParams();
  let activityID = parseInt(params.actId, 10);
  let activity = getActInfo()[activityID];

  const [is_open, setOpenPopup] = useState(false);
  const closePopup = () => setOpenPopup(false);

  let timeStart = Date.now();
  enterTimeStart(timeStart);

  return (<div>
    <main>
      <header>
        <Link className={styles.back} to="../selection-page/selection-page">
          <Back className={styles['back-button']} />
        </Link>
        <div className={styles.score}>Score: {score}</div>
        <Report className={styles['icon-report']} />
      </header>

      <div className={styles.inProgress}>
        <h1 className={styles.selected}>
          <p id={styles.headerTitle}>{activity.name}</p>
          <p>In Progress</p>
        </h1>

        <div>
          <div className={styles.buttonGreen} onClick={() => setOpenPopup(is_open => !is_open)}>
            Activity Description
          </div>
          <Popup open={is_open} closeOnDocumentClick onClose={closePopup}>
            <div className={styles.actPopup}>
              <a className={styles.xButton} onClick={closePopup}> &times; </a>
              <div>
                <section>
                  <h1> {activity.name} </h1>
                  <hr className={styles.lineBreak}/>
                </section>

                <section className={styles['popup-content']}>
                  <div className={styles['popup-content-section']}>
                    <h1>Description:</h1>
                    <p> {activity.description} </p>
                  </div>

                  <div className={styles['popup-content-section']}>
                    <h1>Instructions:</h1>
                    <p> {activity.instruction} </p>
                  </div>

                  <div className={styles['popup-content-section']}>
                    <h1>Tips:</h1>
                    <p> {activity.tips} </p>
                  </div>
                </section>
              </div>
            </div>
          </Popup>
        </div>

      </div>

      <div>
      <ReactStopwatch seconds={0} minutes={0} hours={0} limit="23:59:59"
        render={({ formatted }) => {
          return (
            <div className={styles.timeDisplay}>
              <p>Time Elapsed:</p>
              <p className={styles.stopwatchText}>{ formatted }</p>
            </div>
          );
        }}
      />
      </div>

      <Link to="/reflection/reflection">
        <div className={styles.buttonGreen}
            onClick={() => enterTimeEnd(Date.now())}>
          End Activity
        </div>
      </Link>

    </main>
  </div>);
}

const mapDispatchToProps = (dispatch) => {
  return {
    enterTimeStart: (time) => dispatch(enterTimeStart(time)),
    enterTimeEnd: (time) => dispatch(enterTimeEnd(time)),
  };
};

const mapStateToProps = (state) => {
  return {
    score: state.acts.score,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InProgress);

