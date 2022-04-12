import { Link } from 'react-router-dom';
import { getActs } from './data';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back-arrow-to-first-track-svgrepo-com 1.svg';
import { ReactComponent as Help } from './../../images/help-button.svg';
import { connect } from 'react-redux';
import styles from './ActivitiesList.module.css';

const ActivitiesList = ({ category, time, score }) => {
  let allActs = getActs();
  let acts = allActs.filter((allActs) => allActs.category === category);
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
          <div className={styles.score}>Score: 0</div>
          <Report className={styles['icon-report']} />
        </header>
        <section className={styles['act-list-title']}>
          <h1 className={styles.selected}>
            Selected: {time} min, {category}
          </h1>
          <p>Select an activity or activities to complete:</p>
        </section>
        <section className={styles['act-list']}>
          <div className={styles.labels}>
            <p>activity</p>
            <p className={styles['pts-wrapper']}>
              <Help className={styles['help-button']} />
              <span>points</span>
            </p>
          </div>
          <div className={styles.acts}>
            {acts.map((acts) => (
              <Link
                to={`../activity-description/activity-description/${acts.number}`}
                key={acts.number}
                className="act"
              >
                <p className={styles['act-name']}>{acts.name}</p>
                <p className={styles.pts}>{acts.points}</p>
              </Link>
            ))}

            <div> {/* TODO: DELETE; DO NOT MERGE */}
              <Link to={'../in-progress/in-progress'}> SHORTCUT TO IN-PROGRESS </Link>
            </div>
            {/* <div className="act-1">
              <p className="act">a</p>
              <p className="pts">1</p>
            </div>
            <div className="act-2">
              <p className="act">a</p>
              <p className="pts">1</p>
            </div> */}
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
