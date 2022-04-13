import { Link } from 'react-router-dom';
// import { ReactComponent as Report } from './../../images/icon-report.svg';
import ReactStopwatch from 'react-stopwatch';
import { connect } from 'react-redux';
import { getActInfo } from '../activity-description/data';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { React, useState } from 'react'
import styles from './InProgress.module.css';
import {useParams} from 'react-router-dom'
import { enterTimeStart, enterTimeEnd, enterTimeSpent } from '../../redux/Acts/actsActions';


const InProgress = ({ enterTimeEnd, enterTimeStart, score }) => {
  let params = useParams();
  let activityID = parseInt(params.actId, 10);
  let activityDict = getActInfo();

  const [is_open, setOpenPopup] = useState(false);
  const closePopup = () => setOpenPopup(false);

  let timeStart = Date.now();
  enterTimeStart(timeStart);

  return (<div>
    <main>
      <div>
        {/* <Link to={`/activity-description/activity-description/${activityID}`}> TODO: change */}
          {/* <Back className={styles.backButton}/> */}
        {/* </Link> */}
        <div className={styles.score}>Score: {score}</div>
        {/* <Report className={styles.iconReport}/> */}
      </div>

      <div className={styles.inProgress}>
        <h1 className={styles.selected}>
          <p id={styles.headerTitle}>{activityDict[activityID].name}</p>
          <p>In Progress</p>
        </h1>

        <div>
          <div className={styles.buttonGreen} onClick={() => setOpenPopup(is_open => !is_open)}>
            Activity Description
          </div>
          <Popup open={is_open} closeOnDocumentClick onClose={closePopup}>
            <div className={styles.actPopup}>
              <a className={styles.xButton} onClick={closePopup}> &times;
              </a>
              Text HERE
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
    // enterTimeSpent: (time) => dispatch(enterTimeSpent(time)),
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

