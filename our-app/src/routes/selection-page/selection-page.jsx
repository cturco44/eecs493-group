import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import styles from './SelectionPage.module.css';
import Popup from 'reactjs-popup';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Help } from './../../images/help-button.svg';

import { connect } from 'react-redux';
import { selectCategory, selectTime } from '../../redux/Acts/actsActions';

function ActivityButton(props) {
  return (
    <button
      className={props.ActivityButt}
      onClick={() => selectCategory('social')}
    ></button>
  );
}

const SelectionPage = ({ selectCategory, selectTime, name }) => {
  const [cat, setCat] = useState('');
  const [time, setTime] = useState('');
  const [is_openHelp, setOpenPopupHelp] = useState(false);
  const [is_openError, setOpenPopupError] = useState(false);
  const closePopupHelp = () => setOpenPopupHelp(false);
  const closePopupError = () => setOpenPopupError(false);

  const returnNextButton = (time, cat) => {
    if (time === '' || isNaN(time)) {
      return <div className={styles["activities-btn"]}>
        {/* <button onClick={() => setOpenPopupError(is_openError => !is_openError)}>find activities</button> */}
        <div className={styles.buttonGreen} onClick={() => setOpenPopupError(is_openError => !is_openError)}>
          find activities
        </div>
        {returnErrorPopup("Invalid time: must enter a time that is a number before continuing.")}
      </div>
    } else if (cat !== 'social' && cat !== 'exercise' && cat !== 'mental') {
      return <div className={styles["activities-btn"]}>
        <div className={styles.buttonGreen} onClick={() => setOpenPopupError(is_openError => !is_openError)}>
          find activities
        </div>
        {/* <button onClick={() => setOpenPopupError(is_openError => !is_openError)}>find activities</button> */}
        {returnErrorPopup("Invalid category: must select one of the three categories before continuing.")}
      </div>
    }
    return (
      <div className="d-flex justify-content-center">
        <Link to="../activities-list/activities-list">
          <div className={styles.buttonGreen} onClick={() => selectTime(time)}>
            find activities
          </div>
            {/* <button className={styles.button} onClick={() => selectTime(time)}>find activities</button> */}
        </Link>
      </div>
    );
  };

  const returnErrorPopup = (msg) => {
    return (
      <Popup open={is_openError} closeOnDocumentClick onClose={closePopupError}>
        <div className={styles.popup}>
          <a className={styles.xButton} onClick={closePopupError}>
            &times;
          </a>
          <p className={styles['error-header']}>ERROR</p>
          <p>{msg}</p>
        </div>
      </Popup>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBuff}>
        {/* <Link to="../dashboard/dashboard/0"> 
          <Report className={[styles['report-button'], 'mt-5'].join(' ')}/>
        </Link> */}

        <Help
          className={styles['help-button']}
          onClick={() => setOpenPopupHelp((is_openHelp) => !is_openHelp)}
        />
        <Popup open={is_openHelp} closeOnDocumentClick onClose={closePopupHelp}>
          <div className={styles.popup}>
            <a className={styles.xButton} onClick={closePopupHelp}>
              &times;
            </a>
            <div className={styles['help-header']}>HELP</div>
            <section className={styles['help-question-answer']}>
              <div className={styles['help-question']}>What is Take it Outside?</div>
              <p>
                Take it Outside! is a program aimed at getting people outside. That’s
                it. It gives its users complete flexibility of choice in time
                and location, then suggests a couple of fun activities to do
                outside, from taking a walk with a friend to a outdoor
                photography scavenger hunt.
              </p>
            </section>
            <section className={styles['help-question-answer']}>
              <div className={styles['help-question']}>About categories</div>
              <p>
                Take it Outside! suggests a variety of outdoor activities that can
                roughly be sorted into 3 categories.
              </p>
              <p>Social: activities with any social aspect.</p>
              <p>
                Exercise: activities that focus on more physically intense
                activities outdoors.
              </p>
              <p>
                Mental: activities that help you destress or give you a change
                of pace.
              </p>
            </section>
          </div>
        </Popup>
      </div>

      <div className={styles.header}>
        <p> Hi, {name}! </p>
      </div>

      <div className={styles.minQ}>
        <p> First, how many minutes do you want to be outside for? </p>
      </div>

      <form className={styles.formEntry}>
        {/* TODO: add to state */}
        <input
          type="text"
          
          value={time}
          placeholder="enter your time"
          onChange={(e) => setTime(e.target.value)}
        />
      </form>

      <div className={styles.categoryQ}>
        <p> Now, select categories you are interested in: </p>
      </div>

      <div className={styles.actionButts}>
        <div className={styles.button_w_text}>
          <button className={styles.Social} onClick={() => {
              setCat('social');
              selectCategory('social');
              }}></button>
          <span className={styles.Caption}>Social</span>
        </div>

        <div className={styles.button_w_text}>
        <button className={styles.Exercise} onClick={() => {
              setCat('exercise');
              selectCategory('exercise');
              }}></button>
          <span className={styles.Caption}>Exercise</span>
        </div>

        <div className={styles.button_w_text}>
        <button className={styles.Mental} onClick={() => {
              setCat('mental');
              selectCategory('mental');
              }}></button>
          <span className={styles.Caption}>Mental</span>
        </div>
      </div>
      {returnNextButton(time, cat)}

      <div className="bottBuff"></div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCategory: (cat) => dispatch(selectCategory(cat)),
    selectTime: (time) => dispatch(selectTime(time)),
  };
};

const mapStateToProps = (state) => {
  return {
    name: state.acts.name,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage);
