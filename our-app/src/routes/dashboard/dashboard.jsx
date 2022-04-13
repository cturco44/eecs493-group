import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Home } from './../../images/home.svg';
import { ReactComponent as Back } from './../../images/back2.svg';
import { ReactComponent as SmallStar } from './../../images/star-small.svg';
import { ReactComponent as Arrow } from './../../images/arrow.svg';
import excercise from './../../images/excercise.svg';
import mental from './../../images/mental.svg';
import social from './../../images/social.svg';
import Popup from 'reactjs-popup';

import styles from './Dashboard.module.css';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const Dashboard = ({name, score, category, preActNote, postActNote, preEnergy, postEnergy, preHappiness, postHappiness, preExcitement, postExcitement}) => {
    const [popupOpen, setPopupOpen] = useState(false);
    const closePopupError = () => setPopupOpen(false);
    const image_source = {
        "exercise": excercise,
        "social": social,
        "mental": mental
    };
    return (
        <>
        <Popup open={popupOpen} closeOnDocumentClick onClose={closePopupError}>
            <div className={styles.popup}>
              <a className={styles.xButton} onClick={closePopupError}> &times; </a>
              <h3>Session Notes - Before</h3>
              <div className={styles.notes}>{postActNote}</div>
              <h3>Session Notes - After</h3>
              <div className={styles.notes}>{preActNote}</div>
            </div>
        </Popup>
        <div className={[styles.header, 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center'].join(' ')}>
            <Link to="../selection-page/selection-page">
                <Back></Back>
            </Link>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <Link to="../selection-page/selection-page">
                    <Home className="me-3 icon"/>
                </Link>
                
            </div>
        </div>
        <div className={[styles.top, 'mt-3'].join(' ')}>
        <h1 className="text-center">Way to Go, {name}!</h1>
        <h3 className="text-center mb-5">Look at all that progress!</h3>
        <div className="d-flex flex-row flex-wrap justify-content-center">
            <div className={[styles.card, "me-4"].join(' ')}>
                <h3 className="text-center">{capitalizeFirstLetter(category)}</h3>
                <img className="card-image" src={image_source[category]}></img>
                <div className="card-text"><h3 className="text-center">Favorite Category</h3></div>
            </div>
            <div className={[styles.card, "me-4"].join(' ')}>
                <h3 className={["text-center", styles['big-card-text']].join(' ')}>{score}</h3>
                <h3>Total Points Earned</h3>
            </div>
            <div className={[styles.card, "me-4"].join(' ')}>
                <h3 className={['text-center', styles['big-card-text-2']].join(' ')}>50</h3>
                <h3 className="text-center">Total Minutes</h3>
            </div>
        </div>
        
    </div>
    <div className="container">
        <div className={styles.divider}></div>
        <div className="row">
            <h2>Activity History</h2>
        </div>
        <div className={styles['big-card']}>
                <h4>WALKING</h4>
                <div className="d-flex justify-content-center align-items-start flex-wrap">
                    <div className="d-flex flex-column align-items-center me-4">
                        <div className={[styles.number, styles.black].join(' ')}>40</div>
                        <div className={[styles['under-number'], styles.black].join(' ')}>Minutes</div>
                    </div>
                    <div className={[styles.v1, 'me-4'].join(' ')}></div>
                    <div className={['d-flex', 'flex-column', 'align-items-center', styles.star, 'me-4'].join(' ')}>
                        <div className={[styles.number, styles.black].join(' ')}>{score}</div>
                        <div className={[styles['under-number'], styles.black].join(' ')}>Points Earned</div>
                    </div>
                    <div className={[styles.v1, 'me-4'].join(' ')}></div>
                    <div className="d-flex flex-column align-items-start me-4">
                        <div className={[styles['progress-text'], styles.bold].join(' ')}>Mood Improvement</div>
                        <div className="d-flex justify-content-center align-items-start">
                            <div className="d-flex flex-column align-items-start me-4">
                                <div className={[styles['progress-text'], 'me-5'].join(' ')}>Energy</div>
                                <div className={[styles['progress-text'], 'me-5'].join(' ')}>Happiness</div>
                                <div className={[styles['progress-text'], 'me-5'].join(' ')}>Excitement</div>
                            </div>
                            <div className="d-flex flex-column align-items-start me-4">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className={[styles['progress-text'], 'me-1'].join(' ')}>{preEnergy}</div>
                                    <SmallStar className={[styles['small-star'], 'me-2'].join(' ')}></SmallStar>
                                    <Arrow className='me-2'></Arrow>
                                    <div className={[styles['progress-text'], 'me-1'].join(' ')}>{postEnergy}</div>
                                    <SmallStar className={[styles['small-star'], 'me-2'].join(' ')}></SmallStar>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className={[styles['progress-text'], 'me-1'].join(' ')}>{preHappiness}</div>
                                    <SmallStar className={[styles['small-star'], 'me-2'].join(' ')}></SmallStar>
                                    <Arrow className='me-2'></Arrow>
                                    <div className={[styles['progress-text'], 'me-1'].join(' ')}>{postHappiness}</div>
                                    <SmallStar className={[styles['small-star'], 'me-2'].join(' ')}></SmallStar>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className={[styles['progress-text'], 'me-1'].join(' ')}>{preExcitement}</div>
                                    <SmallStar className={[styles['small-star'], 'me-2'].join(' ')}></SmallStar>
                                    <Arrow className='me-2'></Arrow>
                                    <div className={[styles['progress-text'], 'me-1'].join(' ')}>{postExcitement}</div>
                                    <SmallStar className={[styles['small-star'], 'me-2'].join(' ')}></SmallStar>
                                </div>
                            </div>
                        </div>
                        <div className={styles.button} onClick={() => setPopupOpen(true)}>View Notes</div>
                    </div>

                </div>


            </div>
    
    </div>




        </>
    );

}
const mapStateToProps = (state) => {
    return {
      name: state.acts.name,
      score: state.acts.score,
      category: state.acts.category,
      preActNote: state.acts.preActNote,
      postActNote: state.acts.postActNote,
      preEnergy: state.acts.preEnergy,
      postEnergy: state.acts.postEnergy,
      preHappiness: state.acts.preHappiness,
      postHappiness: state.acts.postHappiness,
      preExcitement: state.acts.preExcitement,
      postExcitement: state.acts.postExcitement,
    };
};

export default connect(mapStateToProps)(Dashboard);