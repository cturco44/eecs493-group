import { Link } from 'react-router-dom';
import { getActs } from '../activities-list/data';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back-arrow-to-first-track-svgrepo-com 1.svg';
import { ReactComponent as Home } from './../../images/home-button.svg';
import { ReactComponent as Help } from './../../images/help-button.svg';
import { connect } from 'react-redux';
import './activity-description.css';

const ActivityDescription = ({actName}) => {
    let allActs = getActs();
    let activity = allActs.filter((allActs) => allActs.name === actName);
    return (
      <div>
        <main>
            <div className="header">
                <div className="headerIcon">
                    <Link to="/"> {/* TODO: change */}
                        <Back className="back-button" />
                    </Link>
                    <Link to="/"> {/* TODO: change */}
                        <Report className="report-button" />
                    </Link>
                    <Link to="/"> {/* TODO: change */}
                        <Home className="home-button" />
                    </Link>
                    <Link to="/"> {/* TODO: change */}
                        <Help className="help-button" />
                    </Link>
                </div>
            </div>

          <section className="activityName">
            <h1> {activity.name} </h1>
            <hr className="lineBreak"/>
          </section>

          <section className="InfoContainer">
            <div className="description">
                <h2>Description:</h2>
                <p> {activity.description} </p>
            </div>

            <div className="instructions">
                <h2>Instructions:</h2>
                <p> {activity.instructions} </p>
            </div>

            <div className="tips">
                <h2>Tips:</h2>
                <p> {activity.tips} </p>
            </div>
        </section>

        <section className="nextButton">
            <button onClick={() => console.log('"next" button pressed!')}>Next</button>
        </section>
        </main>
      </div>
    );
  };

  const mapStateToProps = (state) => {
    return {
      name: state.activity.name,
    };
  };

  export default connect(mapStateToProps)(ActivityDescription);