import { Link } from 'react-router-dom';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back-arrow-to-first-track-svgrepo-com 1.svg';
// import {Stopwatch} from './../Components/Stopwatch'
import { connect } from 'react-redux';
import './in-progress.css';

const InProgress = (/*{ category, time }*/) => {
    let ActivityName = "<ACTIVITY NAME HERE>";
  return (
    <div>
      <main>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> */}

        <header>
          <Link to="/"> {/* TODO: change */}
            <Back className="back-button" />
          </Link>
          <div className="score">Score: 0</div>
          <Report className="icon-report" />
        </header>
        <section className="in-progress">
            <h1 className='selected'>{ActivityName}</h1>
            <p>In Progress</p>
            <div className='horiz-line'/>

            {/* popup? */}
            <button onClick={() => console.log('"activity description" button pressed!')}>Activity Description</button>
            <div className='line-break'/>
            <div>
                <p>Time Elapsed</p>
                {/* <div className="Stopwatch"/> */}
            </div>

            {/* change page + record activity */}
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