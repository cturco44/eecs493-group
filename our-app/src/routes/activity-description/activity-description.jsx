import { Link, useParams } from 'react-router-dom';
import { getActInfo } from './data';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back.svg';
import { ReactComponent as Home } from './../../images/home-button.svg';
import { connect } from 'react-redux';
import styles from './ActivityDescription.module.css';
import { React, useState } from 'react';
import 'reactjs-popup/dist/index.css';

const ActivityDescription = () => {
    let params = useParams();
    let allActs = getActInfo();
    let activityId = parseInt(params.actId, 10)
    let activity = allActs[activityId];

    function NewlineText(props) {
      const text = props.text;
      console.log(text);
      const newText = text.split('\n').map(str => <p style={{textAlign: 'left', paddingBottom: '15px', paddingLeft: '20px'}} >{str}</p>);
      return newText;
    }

    window.scrollTo(0, 0);

    return (
      <div>
        <main>
          <div className={styles.header}>
              <Link to="/activities-list/activities-list">
                  <Back className={styles.backButton} />
              </Link>
              {/*<Link to="/">
                  <Help className={styles.helpButton} />
              </Link>*/}
              <Link to="/">
                  <Report className={styles.reportButton} />
              </Link>
              <Link to="/selection-page/selection-page">
                  <Home className={styles.homeButton} />
              </Link>
          </div>

          <div className={styles.activityName}>
            <h1> {activity.name.toUpperCase()} </h1>
            <p className="titleSubscript">
            ({activity.points} POINTS)
          </p>
            <hr  className={styles.lineBreak} style={{alignItems: 'center', zIndex: '0'}}/>
          </div>

          <div className={styles.InfoContainer}>
            <div className={styles.descriptionContainer}>
                <h2 style={{textAlign: 'left', paddingLeft: '20px'}}>Description:</h2 >
                <NewlineText style={{textAlign: 'left'}} text={activity.description} />
            </div>

            <div className={styles.instructionsContainer}>
                <h2 style={{textAlign: 'left', paddingLeft: '20px'}}>Instructions:</h2>
                <NewlineText text={activity.instruction} />
            </div>

            <div>
                <h2 style={{textAlign: 'left', paddingLeft: '20px'}}>Tips:</h2>
                <NewlineText text={activity.tips} />
            </div>
        </div>

        <section className={styles.buttonContainer}>
          <Link to={`../mindfulness/mindfulness/${activityId}`}>
            <div className={styles.nextButton}> Next </div>
          </Link>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(ActivityDescription);
