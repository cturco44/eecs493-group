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
  const [time, setTime] = useState('');
  const [is_open, setOpenPopup] = useState(false);
  const closePopup = () => setOpenPopup(false);

  return (
    <div>
      <div className={styles.topBuff}>
        <Link to="/"> {/** TODO: Reroute to report page */}
          <Report className={styles['report-button']}/>
        </Link>

        <Help className={styles['help-button']}
              onClick={() => setOpenPopup(is_open => !is_open)}/>
        <Popup open={is_open} closeOnDocumentClick onClose={closePopup}>
          <div className={styles['help-popup']}>
            <a className={styles.xButton} onClick={closePopup}> &times; </a>
            <div className={styles['help-header']}>
              HELP
            </div>
            <section className={styles['help-question-answer']}>
              <div className={styles['help-question']}>What is APP_NAME?</div>
              <p>APP_NAME is a program aimed at getting people outside. That’s it.
                It gives its users complete flexibility of choice in time and
                location, then suggests a couple of fun activities to do outside,
                from taking a walk with a friend to a outdoor photography
                scavenger hunt.
              </p>
            </section>
            <section className={styles['help-question-answer']}>
              <div className={styles['help-question']}>About categories</div>
              <p>APP_NAME suggests a variety of outdoor activities that can
                roughly be sorted into 3 categories.</p>
              <p>Social: activities with any social aspect.</p>
              <p>Exercise: activities that focus on more physically intense activities outdoors.</p>
              <p>Mental: activities that help you destress or give you a change of pace.</p>
            </section>
          </div>
        </Popup>
      </div>

      <div className={styles.header}>
        <p> Hi, {name}! </p>
      </div>

      <div className={styles.minQ}>
        <p> First, how many minutes want to be outside for? </p>
      </div>

      <form>
        {/* TODO: add to state */}
        <input
          type="text"
          value={time}
          placeholder="enter your time"
          onChange={(e) => setTime(e.target.value)}
        />
      </form>

      <div className="categoryQ">
        <p> Now, select categories you are interested in: </p>
      </div>

      <div className={styles.categoryQ}>
        <p> Now, select categories you are interested in: </p>
      </div>

      <div className={styles.actionButts}>
        <div className={styles.button_w_text}>
          <button onClick={() => selectCategory('social')}>Social</button>
          <span className={styles.Caption}>Social</span>
        </div>

        <div className={styles.button_w_text}>
          <button onClick={() => selectCategory('exercise')}>Exercise</button>
          <span className={styles.Caption}>Exercise</span>
        </div>

        <div className={styles.button_w_text}>
          <button onClick={() => selectCategory('mental')}>Mental</button>
          <span className={styles.Caption}>Mental</span>
        </div>

        {/* <ActivityButton ActivityButt="Social" className = 'Social' />

          <ActivityButton ActivityButt="Exercise" className = 'Exercise' onClick={() => selectCategory('exercise')}/>
          <ActivityButton ActivityButt="Mental" className = 'Mental' onClick={() => selectCategory('mental')}/> */}
      </div>
      <Link to="../activities-list/activities-list">
        <button onClick={() => selectTime(time)}>find activities</button>
      </Link>

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
