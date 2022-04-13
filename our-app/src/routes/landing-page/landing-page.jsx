import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import styles from './LandingPage.module.css';
import Popup from 'reactjs-popup';
import { connect } from 'react-redux';
import { enterName } from '../../redux/Acts/actsActions';

const isValidName = (name) => {
  for (let i = 0; i < name.length; i++) {
    if (!(name[i] >= "a" && name[i] <= "z") && !(name[i] === "-") && !(name[i] === " ")) {
      return false;
    }
  }
  return true;
}

const LandingPage = ({ enterName }) => {
  const [name, setName] = useState('');
  const [is_openError, setOpenPopupError] = useState(false);
  const closePopupError = () => setOpenPopupError(false);

  const getNextButton = (name) => {
    if (isValidName(name.toLowerCase()) && name !== "") {
      return (
        <Link to="../selection-page/selection-page">
          <input
            type="button"
            className={styles.StartButt}
            value="Start Session"
            onClick={() => enterName(name)}
          />
        </Link>
      )
    } else {
      return (
        <div>
          <input
            type="button"
            className={styles.StartButt}
            value="Start Session"
            onClick={() => setOpenPopupError(is_openError => !is_openError)}
          />
          <Popup open={is_openError} closeOnDocumentClick onClose={closePopupError}>
            <div className={styles.popup}>
              <a className={styles.xButton} onClick={closePopupError}> &times; </a>
              <p className={styles['error-header']}>ERROR</p>
              <p>"Invalid name: must enter a name with only alphabetic characters."</p>
            </div>
          </Popup>
        </div>
      );

    }
  }

  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.header} id="Welcome">
          <h1> WELCOME </h1>
        </div>

        <form>
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </form>

        {getNextButton(name)}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterName: (name) => dispatch(enterName(name)),
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
