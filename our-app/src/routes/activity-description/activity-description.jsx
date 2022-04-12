import { Link } from 'react-router-dom';
import { getActInfo } from './data';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back-arrow-to-first-track-svgrepo-com 1.svg';
// import { ReactComponent as Home } from './../../images/home-button.svg';
import { ReactComponent as Help } from './../../images/help-button.svg';
import { connect } from 'react-redux';
import styles from './ActivityDescription.module.css';
import {useParams} from 'react-router-dom'

const ActivityDescription = ({actID}) => {
    // let allActs = getActs();
    // let activity = allActs.filter((allActs) => allActs.name === actName);
    let params = useParams();
    let allActs = getActInfo();
    let activityId = parseInt(params.actId, 10)
    let activity = allActs[activityId];
    return (
      <div>
        <main>
          <div class="header d-flex flex-row justify-content-between align-items-center">
            <img src="images/back.svg" alt="back icon"/>
            <div class="d-flex flex-row justify-content-between align-items-center">
                <img src="images/report.svg" class="me-3 icon" alt="report icon"/>
                {/* <img src="images/home.svg" class="me-3 icon" alt="home icon"/> */}
                <img src="images/question-mark.svg" class="me-3 icon" alt="question icon"/>
            </div>
          </div>

            <div className={styles.header}>

                <div className={styles.headerIcon}>
                    <Link to="/"> {/* TODO: change */}
                        <Back className="back-button" />
                    </Link>
                    <Link to="/"> {/* TODO: change */}
                        <Report className="report-button" />
                    </Link>
                    <Link to="/"> {/* TODO: change */}
                        {/* <Home className="home-button" /> */}
                    </Link>
                    <Link to="/"> {/* TODO: change */}
                        <Help className={styles['help-button']} />
                    </Link>
                </div>
            </div>

          <section className={styles.activityName}>
            <h1> {activity.name} </h1>
            <hr className={styles.lineBreak}/>
          </section>

          <section className={styles.InfoContainer}>
            <div className={styles.description}>
                <h2>Description:</h2>
                <p> {activity.description} </p>
            </div>

            <div className={styles.instructions}>
                <h2>Instructions:</h2>
                <p> {activity.instruction} </p>
            </div>

            <div className={styles.tips}>
                <h2>Tips:</h2>
                <p> {activity.tips} </p>
            </div>
        </section>

        <section className={styles.nextButton}>
          <Link to={`../mindfulness/mindfulness/${activityId}`}>
            <div className={styles.nextButt}> Next </div>
          </Link>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = () => {
  return {
  };
};

export default connect(mapStateToProps)(ActivityDescription);
