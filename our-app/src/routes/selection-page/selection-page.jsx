import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import styles from './SelectionPage.module.css';
import Popup from 'reactjs-popup';

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

const SelectionPage = ({ selectCategory }) => {
  const [time, setTime] = useState("");
  const [is_open, setOpenPopup] = useState(false);
  const closePopup = () => setOpenPopup(false);

  return (
      <div>
        <div className={styles.topBuff}></div>

        <input type="button" className={styles.report} />

        <div>
          <div className={styles.report} onClick={() => setOpenPopup(is_open => !is_open)}>
            Activity Description
          </div>
          <Popup open={is_open} closeOnDocumentClick onClose={closePopup}>
            <div className="act-popup">
              <a className="x-button" onClick={closePopup}> &times;
              </a>
              Text HERE
            </div>
          </Popup>
        </div>

        <div className = {styles.header}>
          <p> Hi, name! </p>
        </div>

        <div className = {styles.minQ}>
          <p> First, how many minutes want to be outside for? </p>
        </div>

        <form>
          {/* TODO: add to state */}
          <input type="text" value={time} placeholder="enter your time" onChange={e => setTime(e.target.value)}/>
        </form>
      <form>
        {/* TODO: add to state */}
        <input
          type="text"
          value={time}
          placeholder="time"
          onChange={(e) => setTime(e.target.value)}
        />
      </form>

      <div className="categoryQ">
        <p> Now, select categories you are interested in: </p>
      </div>

        <div className= {styles.categoryQ}>
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

export default connect(null, mapDispatchToProps)(SelectionPage);
