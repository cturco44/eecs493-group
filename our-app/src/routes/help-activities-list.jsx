import { Link } from 'react-router-dom';
import { getActs } from '../data';
import { ReactComponent as Report } from './../images/icon-report.svg';
import { ReactComponent as Back } from './../images/back-arrow-to-first-track-svgrepo-com 1.svg';
// import { ReactComponent as Help } from './../images/help-button.svg';
import { connect } from 'react-redux';
import './help-activities-list.css';

const HelpActivitiesList = (/*{ category, time }*/) => {
  return (
    <div>
      <main>
        <header>
          <Link to="/"> {/* TODO: change */}
            <Back className="back-button" />
          </Link>
          <div className="score">Score: 0</div>
          <Report className="icon-report" />
        </header>
        <section className="help-activities-list">
          <h1>Help</h1>
          <div className='horiz-line'/>
          <div>
            <h2 className='bold'>Points</h2>
            <p>
              This is the body of an explanation about the points system.
            </p>
          </div>
          <div>
            <h2 className='bold'>Points vs Time</h2>
            <p>
              This is the body of an explanation about the points system as a user accumulates events in the report.
            </p>
          </div>
        </section>
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
