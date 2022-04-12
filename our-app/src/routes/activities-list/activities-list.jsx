import { Link } from 'react-router-dom';
import { getActs } from './data';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back-arrow-to-first-track-svgrepo-com 1.svg';
import { ReactComponent as Help } from './../../images/help-button.svg';
import { connect } from 'react-redux';
import './activities-list.css';

const ActivitiesList = ({ category, time }) => {
  let allActs = getActs();
  let acts = allActs.filter((allActs) => allActs.category === category);
  /* const socialActs = ['outdoor walk with friend', 'picnic'];
  const exerciseActs = ['outdoor run', 'bike ride'];
  const mentalActs = ['outdoor meditation', 'nature scavenger hunt']; */
  return (
    <div>
      <main>
        <header>
          <Link to="../selection-page/selection-page">
            <Back className="back-button" />
          </Link>
          <div className="score">Score: 0</div>
          <Report className="icon-report" />
        </header>
        <section className="act-list-title">
          <h1 className="selected">
            Selected: {time} min, {category}
          </h1>
          <p>Select an activity or activities to complete:</p>
        </section>
        <section className="act-list">
          <div className="labels">
            <p>activity</p>
            <p className="pts-wrapper">
              <Help className="help-button" />
              <span>points</span>
            </p>
          </div>
          <div className="acts">
            {acts.map((acts) => (
              <Link
                to={'../activity-description/activity-description'}
                key={acts.number}
                className="act"
              >
                <p className="act-name">{acts.name}</p>
                <p className="pts">{acts.points}</p>
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
  };
};

export default connect(mapStateToProps)(ActivitiesList);
