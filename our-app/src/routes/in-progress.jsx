import { Link } from 'react-router-dom';
import { getActs } from '../data';
import { ReactComponent as Report } from './../images/icon-report.svg';
import { ReactComponent as Back } from './../images/back-arrow-to-first-track-svgrepo-com 1.svg';
// import { ReactComponent as Help } from './../images/help-button.svg';
import { connect } from 'react-redux';
import './in-progress.css';

const InProgress = (/*{ category, time }*/) => {
    let ActivityName = "<ACTIVITY NAME HERE>";
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
        <section className="in-progress">
            <h1>{ActivityName}</h1>
            <p>In Progress</p>
            <div className='horiz-line'/>
            <button onClick={() => console.log('"activity description" button pressed!')}>Activity Description</button>
            <div className='line-break'/>
            <div>
                <p>Time Elapsed</p>
                <div className='Stopwatch'>{'<Stopwatch time here'}</div>
            </div>
            <button onClick={() => console.log('"end activity" button pressed!')}>End Activity</button>
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

export default connect(mapStateToProps)(InProgress);
