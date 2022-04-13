import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back.svg';
import { ReactComponent as Home } from './../../images/home-button.svg';
import { ReactComponent as Help } from './../../images/help-button.svg';
import { ReactComponent as Blackstar } from './../../images/star-black.svg';
import { ReactComponent as Goldstar } from './../../images/star-gold.svg';
import { connect } from 'react-redux';
import styles from './reflection.module.css';
import { useParams } from 'react-router-dom';
import {
  enterPostEnergy,
  enterPostExcitement,
  enterPostHappiness,
  enterPostNote,
} from '../../redux/Acts/actsActions';

const Reflection = ({
  enterPostEnergy,
  enterPostExcitement,
  enterPostHappiness,
  enterPostNote,
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
    enterPostEnergy(level);
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
    enterPostHappiness(level);
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
    enterPostExcitement(level);
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
    enterPostNote(notes);
    console.log('"Finish Activity" button pressed!');
    console.log('postEnergy: ' + energy);
    console.log('postHappiness: ' + happiness);
    console.log('postExcitement: ' + excitement);
    console.log('postNotes: ' + notes);
  };

  return (
    <div>
      <main>
              <div className={styles.header}>
                <div>
                    <Link to={`/in-progress/in-progress/${activityID}`}> 
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
          <h1> POST-ACTIVITY REFLECTION </h1>
          <p className={styles.titleSubscript}>
            (PLEASE TAKE THE TIME TO REFLECT ON YOUR EXPERIENCE)
          </p>
          <hr className={styles.lineBreak} />
        </div>

        <div className={styles.InfoContainer}>
          <div className={styles.description}>
            <h3>What would you rate your current energy level?</h3>
            <div className={styles.starsContainer}>{energyList}</div>
          </div>

          <div className="description">
            <h3>How happy are you currently feeling?</h3>
            <div className={styles.starsContainer}>{happinessList}</div>
          </div>

          <div className="description">
            <h3> How much did you enjoy this session?</h3>
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

        <Link to={'/'}>
          {' '}
          {/* TODO: change */}
          <div className={styles.buttonContainer}>
            <button
              onClick={() => handleButtonClick()}
              className={styles.beginButton}
              type="button"
            >
              Finish Activity
            </button>
          </div>
        </Link>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterPostNote: (note) => dispatch(enterPostNote(note)),
    enterPostEnergy: (rate) => dispatch(enterPostEnergy(rate)),
    enterPostHappiness: (rate) => dispatch(enterPostHappiness(rate)),
    enterPostExcitement: (rate) => dispatch(enterPostExcitement(rate)),
  };
};

export default connect(null, mapDispatchToProps)(Reflection);
