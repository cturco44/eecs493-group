import { Link } from 'react-router-dom';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back-arrow-to-first-track-svgrepo-com 1.svg';
import ReactStopwatch from 'react-stopwatch';
import { connect } from 'react-redux';
import { getActInfo } from '../activity-description/data';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { React, useState } from 'react'
import styles from './InProgress.module.css';
import {useParams} from 'react-router-dom'


const InProgress = () => {
  let params = useParams();
  let activityID = parseInt(params.actId, 10);
  let activityDict = getActInfo();

  const [is_open, setOpenPopup] = useState(false);
  const closePopup = () => setOpenPopup(false);

  // let prevPageURL =

  return (<div>
      {/* <!-- Bootstrap CSS --> */}
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      <link rel="stylesheet" href="css/style.css"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Faster+One&family=Inter:wght@400;600;700&display=swap" rel="stylesheet"></link>

      <div class="header d-flex flex-row justify-content-between align-items-center">
        <img src="images/back.svg" alt="back icon"/>
        <div class="d-flex flex-row justify-content-between align-items-center">
          <img src="./../../images/icon-report.svg" class="me-3 icon" alt="report icon"/>
          <img src="images/home.svg" class="me-3 icon" alt="home icon"/>
          <img src="images/question-mark.svg" class="me-3 icon" alt="question icon"/>
        </div>
      </div> */}
    <main>
      <div>
        <Link to="/activity-description/activity-description"> {/* TODO: change */}
          <Back className="back-button" />
        </Link>
        <div className="score">Score: 0</div>
        <Report className="icon-report" />
      </div>

      <div className="in-progress">
        <h1 className='selected'>
          <p id="header-title">{activityDict[activityID].name}</p>
          <p>In Progress</p>
        </h1>

        <div>
          <div className="button-green" onClick={() => setOpenPopup(is_open => !is_open)}>
            Activity Description
          </div>
          <Popup open={is_open} closeOnDocumentClick onClose={closePopup}>
            <div className="act-popup">
              <a className="x-button" onClick={closePopup}> &times;
              </a>
              Text HERE
            </div>
          </Popup>
        </div>

      </div>

      <div>
      <ReactStopwatch seconds={0} minutes={0} hours={0} limit="23:59:59"
        onChange={({ hours, minutes, seconds }) => {
          // do something
        }}
        onCallback={() => console.log('Finish')}
        render={({ formatted }) => {
          return (
            <div className="time-display">
              <p>Time Elapsed:</p>
              <p className="stopwatch-text">{ formatted }</p>
            </div>
          );
        }}
      />
      </div>

      <Link to="/reflection/reflection"> { /** TODO */}
        <div className="button-green" onClick={() => console.log('"end activity" button pressed!')}>
          End Activity
        </div>
      </Link>


    </main>
  </div>);
}

export default InProgress;
