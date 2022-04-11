import { Link } from 'react-router-dom';
import { getActs } from '../data';
import { ReactComponent as Report } from './../images/icon-report.svg';
import { ReactComponent as Back } from './../images/back-arrow-to-first-track-svgrepo-com 1.svg';
// import { ReactComponent as Help } from './../images/help-button.svg';
import { connect } from 'react-redux';
import './help-start.css';

const HelpStart = (/*{ category, time }*/) => {
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
        <section className="help-start">
          <h1>Help</h1>
          <div className='horiz-line'/>
          <div>
            <h2 className='bold'>About this app</h2>
            <p>
              This is the body of an explanation about this app.
            </p>
          </div>
          <div>
            <h2 className='bold'>About Categories</h2>
            <p>
              This is the body of an explanation about the categories.
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

export default connect(mapStateToProps)(HelpStart);
