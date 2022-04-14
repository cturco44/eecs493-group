import { Link } from 'react-router-dom';
import { getActs } from './data';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back-arrow-to-first-track-svgrepo-com 1.svg';
import { ReactComponent as Help } from './../../images/help-button.svg';
import { connect } from 'react-redux';
import styles from './ActivitiesList.module.css';
import { React, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ActivitiesList = ({ category, time, score }) => {
  let allActs = getActs();
  let acts = allActs.filter((allActs) => allActs.category === category);

  const [is_open, setOpenPopup] = useState(false);
  const closePopup = () => setOpenPopup(false);

  /* const socialActs = ['outdoor walk with friend', 'picnic'];
  const exerciseActs = ['outdoor run', 'bike ride'];
  const mentalActs = ['outdoor meditation', 'nature scavenger hunt']; */
  return (
    <div className={styles['list-css']}>
      <main>
        <header>
          <Link to="../selection-page/selection-page">
            <Back className={styles['back-button']} />
          </Link>
          <div className={styles.score}>Score: {score}</div>
          {/* <Link to={`../dashboard/dashboard/${0}`}>
            <Report className={styles['icon-report']} />
          </Link> */}
        </header>
        <section className={styles['act-list-title']}>
          <h1 className={styles.selected}>
            Selected: {time} min, {category}
          </h1>
          <p>Select an activity to complete:</p>
        </section>
        <section className={styles['act-list']}>
          <div className={styles.labels}>
            <p>activity</p>
            <p className={styles['pts-wrapper']}>
              <Help className={styles['help-button']} onClick={() => setOpenPopup(is_open => !is_open)} />
              <Popup open={is_open} closeOnDocumentClick onClose={closePopup}>
                <div className={styles['help-popup']}>
                  <a className={styles.xButton} onClick={closePopup}> &times;
                  </a>
                  <div className={styles['help-header']}>
                    HELP
                  </div>
                  <section className={styles['help-question-answer']}>
                    <div className={styles['help-question']}>What is Take it Outside?</div>
                    <p>Take it Outside! is a program aimed at getting people outside. That’s it.
                      It gives its users complete flexibility of choice in time and
                      location, then suggests a couple of fun activities to do outside,
                      from taking a walk with a friend to a outdoor photography
                      scavenger hunt.
                    </p>
                  </section>
                  <section className={styles['help-question-answer']}>
                    <div className={styles['help-question']}>About scores/points?</div>
                    <p>As you complete activites, you can earn points that count towards
                      your “score”. You can see your score in the upper right corner of
                        the activity selection screen.</p>
                    <p>Different activities may reward different amounts of points.
                      Additionally, as you complete activites, the amount of points
                      awarded by activities that you do not tend to select may increase,
                      giving you an opportunity to try something different for more
                      rewards.
                    </p>
                  </section>
                </div>
              </Popup>
              <span>points</span>
            </p>
          </div>
          <div className={styles.acts}>
            {acts.map((acts) => (
              <Link
                to={`../activity-description/activity-description/${acts.number}`}
                key={acts.number}
                className={styles['act']}
              >
                <p className={styles['act-name']}>{acts.name}</p>
                <p className={styles.pts}>{acts.points}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    category: state.acts.category,
    time: state.acts.time,
    score: state.acts.score,
  };
};

export default connect(mapStateToProps)(ActivitiesList);
