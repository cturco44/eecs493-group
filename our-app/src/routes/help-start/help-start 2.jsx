// import { Link } from 'react-router-dom';
// import { getActs } from '../data';
// import { ReactComponent as Report } from './../images/icon-report.svg';
// import { ReactComponent as Back } from './../images/back-arrow-to-first-track-svgrepo-com 1.svg';
// import { ReactComponent as Help } from './../images/help-button.svg';
import { connect } from 'react-redux';
import styles from './HelpActivitiesList.module.css';

const HelpActivitiesList = (/*{ category, time }*/) => {
  return (
    <div>
      <main className={styles.popup}>
        <div className={styles['help-popup']}>
          <div className={styles['help-header']}>
            HELP
          </div>
          {/* <div className="horiz-line"></div> */}
          <section className={styles['help-question-answer']}>
            <div className={styles['help-question']}>What is APP_NAME?</div>
            <p>APP_NAME is a program aimed at getting people outside. That’s it.
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

      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // category: state.acts.category,
    // time: state.acts.time,
  };
};

export default connect(mapStateToProps)(HelpActivitiesList);
