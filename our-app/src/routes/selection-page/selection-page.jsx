import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import styles from './SelectionPage.module.css';

import { connect } from 'react-redux';
import { selectCategory } from '../../redux/Acts/actsActions';

function ActivityButton(props) {
  return (
    <button className={props.ActivityButt} onClick={() => selectCategory('social')}></button>
  );
}

const SelectionPage = ({ selectCategory }) => {
  const [time, setName] = useState("");
  return (
      <div>
        <div className={styles.topBuff}></div>

        <input type="button" className={styles.report} />

        <div className = {styles.header}>
          <p> Hi, name! </p>
        </div>

        <div className = {styles.minQ}>
          <p> First, how many minutes want to be outside for? </p>
        </div>

        <form>
          {/* TODO: add to state */}
          <input type="text" value={time} placeholder="enter your time" onChange={e => setName(e.target.value)}/>

        </form>

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
        <Link to="../activities-list/activities-list">find activities</Link>

        <div className={styles.bottBuff}></div>
      </div>

  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCategory: (cat) => dispatch(selectCategory(cat)),
  };
};

export default connect(null, mapDispatchToProps)(SelectionPage);

