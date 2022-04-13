// import { ReactComponent as Report } from './../../images/icon-report.svg';
import { React, useState } from 'react'
import ReactStopwatch from 'react-stopwatch';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { enterTimeStart, enterTimeEnd, changeScore } from '../../redux/Acts/actsActions';
import { getActInfo } from '../activity-description/data';
import styles from './InProgress.module.css';

const compare = (start, end) => {
  console.error("22start: " + String(start));
  console.error("22end: " + String(end));
  console.error(start < end);
}
const getSecond = (start, end) => {
  compare(start, end);
  console.log("seconds: " + String(Math.floor((end - start) / 1000)));
  return Math.floor((end - start) / 1000); 
}

const getMinute = (start, end) => {
  return Math.floor(((end - start) / 1000) / 60); 
}

const getHour = (start, end) => {
  return Math.floor(((end - start) / 1000) / 3600); 
}

const InProgress = ({ score, timeStart, enterTimeEnd, changeScore }) => {
  let params = useParams();
  let activityID = parseInt(params.actId, 10);
  let activity = getActInfo()[activityID];

  const [is_open, setOpenPopup] = useState(false);
  const closePopup = () => setOpenPopup(false);
  const [is_openConfirm, setOpenConfirm] = useState(false);
  const closePopupConfirm = () => setOpenConfirm(false);

  // let timeStart = Date.now();
  // enterTimeStart(timeStart);
  const [time_chkpt, setChkPt] = useState(Date.now());
  const chkpt = [0, 0, 0];

  let getNextButton = () => {
    <Popup open={is_open} closeOnDocumentClick onClose={closePopup}>
      <div className={styles.popup}>
        <a className={styles.xButton} onClick={closePopup}> &times; </a>
        <div>
        
        </div>
      </div>
    </Popup>
  }

  return (<div>
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.score}>Score: {score + activity.points}</div>
      </header>

      <div className={styles.wrapper}>
        <div className={styles.inProgress}>
          <h1 className={styles.selected}>
            <p id={styles.headerTitle}>{activity.name}</p>
            <p>In Progress</p>
          </h1>
  
          <div>
            <div className={styles.buttonGreen} onClick={() => {
              compare(timeStart, Date.now());
              setChkPt(Date.now());
              setOpenPopup(is_open => !is_open);
              }}>
              Activity Description
            </div>
            <Popup open={is_open} closeOnDocumentClick onClose={closePopup}>
              <div className={styles.popup}>
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
        <ReactStopwatch 
            seconds={0}//getSecond(timeStart, time_chkpt)} 
            minutes={0}//getMinute(timeStart, time_chkpt)} 
            hours={0}//getHour(timeStart, time_chkpt)} 
            limit="00:00:20"
          onChange={() => {
            chkpt[0] += 1;
            if (chkpt[0] === 60){
              chkpt[0] = 0;
              chkpt[1] += 1;      
            }
            if (chkpt[1] === 60) {
              chkpt[1] = 0;
              chkpt[2] += 1;
            }    
          }}
          render={({ formatted, hours, minutes, seconds }) => {
            return (
              <div className={styles.timeDisplay}>
                <p>Time Elapsed:</p>
                <p className={styles.stopwatchText}>
                  { formatted }
                  </p>
              </div>
            );
          }}
        />
          {/* <p>{formatted}</p> */}
        </div>
  
        <div className={styles.buttonGreen}
              onClick={() => {
                setChkPt(Date.now());
                setOpenConfirm(is_openConfirm => !is_openConfirm);
              }}>
            End Activity
        </div>
        <Popup open={is_openConfirm} closeOnDocumentClick onClose={closePopupConfirm}>
          <div className={styles.actPopup}>
            <p>Are you sure you want to end the activity?</p>
            <div className={styles["confirm-buttons"]}> 
              <button onClick={closePopupConfirm}> No </button>
              <Link to="/reflection/reflection">
                <button onClick={() => {
                  changeScore(score + activity.points);
                  enterTimeEnd(Date.now());
                }}> Yes </button>
              </Link>
            </div>
          </div>
        </Popup>
      </div>
    </main>
  </div>);
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeScore: (score) => dispatch(changeScore(score)),
    // enterTimeStart: (time) => dispatch(enterTimeStart(time)),
    enterTimeEnd: (time) => dispatch(enterTimeEnd(time)),
  };
};

const mapStateToProps = (state) => {
  return {
    score: state.acts.score,
    timeStart: state.acts.timeStart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InProgress);

