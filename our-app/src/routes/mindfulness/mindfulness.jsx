import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back.svg';
import { ReactComponent as Home } from './../../images/home-button.svg';
import { ReactComponent as Help } from './../../images/help-button.svg';
import { ReactComponent as Blackstar } from './../../images/star-black.svg';
import { ReactComponent as Goldstar } from './../../images/star-gold.svg';
import { connect } from 'react-redux';
import styles from './mindfulness.module.css';
import { useParams } from 'react-router-dom';
import {
  enterPreEnergy,
  enterPreExcitement,
  enterPreHappiness,
  enterPreNote,
} from '../../redux/Acts/actsActions';

const Mindfulness = ({
  enterPreEnergy,
  enterPreExcitement,
  enterPreHappiness,
  enterPreNote,
}) => {
  const [energy, setEnergy] = useState(0);
  const [happiness, setHappiness] = useState(0);
  const [excitement, setExcitement] = useState(0);
  const [notes, setNotes] = useState('');

  let params = useParams();
  let activityID = parseInt(params.actId, 10);

  const [energyList, setEnergyList] = useState([
    <Blackstar
      onClick={() => {
        handleEnergyClick(1);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleEnergyClick(2);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleEnergyClick(3);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleEnergyClick(4);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleEnergyClick(5);
      }}
      className={styles.stars}
    ></Blackstar>,
  ]);

  const handleEnergyClick = (level) => {
    enterPreEnergy(level);
    setEnergy(level);
    let temp = [];
    let j = 0;
    for (let i = 0; i < level; i++) {
      temp.push(
        <Goldstar
          onClick={() => {
            handleEnergyClick(i + 1);
          }}
          className={styles.stars}
        ></Goldstar>
      );
      j++;
    }
    for (let i = j; i < 5; i++) {
      temp.push(
        <Blackstar
          onClick={() => {
            handleEnergyClick(i + 1);
          }}
          className={styles.stars}
        ></Blackstar>
      );
    }
    setEnergyList(temp);
  };

  const [happinessList, setHappinessList] = useState([
    <Blackstar
      onClick={() => {
        handleHappinessClick(1);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleHappinessClick(2);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleHappinessClick(3);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleHappinessClick(4);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleHappinessClick(5);
      }}
      className={styles.stars}
    ></Blackstar>,
  ]);

  const handleHappinessClick = (level) => {
    enterPreHappiness(level);
    setHappiness(level);
    let temp = [];
    let j = 0;
    for (let i = 0; i < level; i++) {
      temp.push(
        <Goldstar
          onClick={() => {
            handleHappinessClick(i + 1);
          }}
          className={styles.stars}
        ></Goldstar>
      );
      j++;
    }
    for (let i = j; i < 5; i++) {
      temp.push(
        <Blackstar
          onClick={() => {
            handleHappinessClick(i + 1);
          }}
          className={styles.stars}
        ></Blackstar>
      );
    }
    setHappinessList(temp);
  };

  const [excitementList, setExcitementList] = useState([
    <Blackstar
      onClick={() => {
        handleExcitementClick(1);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleExcitementClick(2);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleExcitementClick(3);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleExcitementClick(4);
      }}
      className={styles.stars}
    ></Blackstar>,
    <Blackstar
      onClick={() => {
        handleExcitementClick(5);
      }}
      className={styles.stars}
    ></Blackstar>,
  ]);

  const handleExcitementClick = (level) => {
    enterPreExcitement(level);
    setExcitement(level);
    let temp = [];
    let j = 0;
    for (let i = 0; i < level; i++) {
      temp.push(
        <Goldstar
          onClick={() => {
            handleExcitementClick(i + 1);
          }}
          className={styles.stars}
        ></Goldstar>
      );
      j++;
    }
    for (let i = j; i < 5; i++) {
      temp.push(
        <Blackstar
          onClick={() => {
            handleExcitementClick(i + 1);
          }}
          className={styles.stars}
        ></Blackstar>
      );
    }
    setExcitementList(temp);
  };

  const handleButtonClick = () => {
    enterPreNote(notes);
    console.log('"begin activity" button pressed!');
    console.log('preEnergy: ' + energy);
    console.log('preHappiness: ' + happiness);
    console.log('preExcitement: ' + excitement);
    console.log('preNotes: ' + notes);
  };

  return (
    <div>
      <main>
            <div className={styles.header}>
                <div>
                    <Link to={`/activity-description/activity-description/${activityID}`}> 
                        <Back className={styles.backButton} />
                    </Link>                   
                    {/*<Link to="/"> 
                        <Help className={styles.helpButton} />
                    </Link>*/}
                    <Link to="/"> 
                        <Report className={styles.reportButton} />
                    </Link>
                    <Link to="/selection-page/selection-page"> 
                        <Home className={styles.homeButton} />
                    </Link>
                </div>
            </div>

        <div className={styles.title}>
          <h1> PRE-ACTIVITY MINDFULNESS </h1>
          <p className={styles.titleSubscript}>
            (BEFORE YOU BEGIN, PLEASE FILL OUT THIS QUICK SURVEY)
          </p>
          <hr className={styles.lineBreak} />
        </div>


        <div className={styles.InfoContainer}>
          <div className={styles.description}>
            <h3>What would you rate your current engergy level?</h3>
            <div className={styles.starsContainer}>{energyList}</div>
          </div>

          <div className={styles.description}>
            <h3>How happy are you currently feeling?</h3>
            <div className={styles.starsContainer}>{happinessList}</div>
          </div>

          <div className={styles.description}>
            <h3>How excited are you about doing this session?</h3>
            <div className={styles.starsContainer}>{excitementList}</div>
          </div>
        </div>

        <div className={styles.textContainer}>
          <textarea
            value={notes}
            id="userInput"
            onInput={(e) => setNotes(e.target.value)}
            className={styles.textBox}
            type="text"
            placeholder="Notes..."
            style={{textAlign: 'left', width: '85%'}}
          ></textarea>
        </div>

        <Link to={`/in-progress/in-progress/${activityID}`}>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => handleButtonClick()}
              className={styles.beginButton}
              type="button"
            >
              Begin Activity
            </button>
          </div>
        </Link>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterPreNote: (note) => dispatch(enterPreNote(note)),
    enterPreEnergy: (rate) => dispatch(enterPreEnergy(rate)),
    enterPreHappiness: (rate) => dispatch(enterPreHappiness(rate)),
    enterPreExcitement: (rate) => dispatch(enterPreExcitement(rate)),
  };
};

export default connect(null, mapDispatchToProps)(Mindfulness);
