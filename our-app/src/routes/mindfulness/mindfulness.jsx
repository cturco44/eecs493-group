import { Link } from 'react-router-dom';
import { getActs } from './activities-list/data';
import { useState } from 'react';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back-arrow-to-first-track-svgrepo-com 1.svg';
import { ReactComponent as Home } from './../../images/home-button.svg';
import { ReactComponent as Help } from './../../images/help-button.svg';
import { ReactComponent as blackStar } from './../../images/star-black.svg';
import { ReactComponent as goldStar } from './../../images/star-gold.svg';
import { connect } from 'react-redux';
import './mindfulness.css';
import {useParams} from 'react-router-dom'
import {handleEnergyClick, handleHappinessClick} from

const Mindfulness = () => {
    let energy = 0;
    let happiness = 0;
    let excitement = 0;
    const [notes, setNotes] = useState("");

    let params = useParams();
    let activityID = parseInt(params.actId, 10);


    const [energyList, setEnergyList] = useState([
        <blackStar key="1" onClick={() => {handleEnergyClick(1)}} className="stars"></blackStar>,
        <goldStar key="2" onClick={() => {handleEnergyClick(1)}} className="goldStars"></goldStar>,
        <blackStar key="3" onClick={() => {handleEnergyClick(2)}} className="stars"></blackStar>,
        <goldStar key="4" onClick={() => {handleEnergyClick(2)}} className="goldStars"></goldStar>,
        <blackStar key="5" onClick={() => {handleEnergyClick(3)}} className="stars"></blackStar>,
        <goldStar key="6" onClick={() => {handleEnergyClick(3)}} className="goldStars"></goldStar>,
        <blackStar key="7" onClick={() => {handleEnergyClick(4)}} className="stars"></blackStar>,
        <goldStar key="8" onClick={() => {handleEnergyClick(4)}} className="goldStars"></goldStar>,
        <blackStar key="9" onClick={() => {handleEnergyClick(5)}} className="stars"></blackStar>,
        <goldStar key="10" onClick={() => {handleEnergyClick(5)}} className="goldStars"></goldStar>
    ]);

    handleEnergyClick = (level) => {
        energy = level;
        let temp = energyList;
        for(let i = 0; i < temp.length()/2; i++){
            temp[i].style.display = "inline-block";
            i++;
            temp[i].style.display = "none";
        }
        for(let i = 0; i < level; i++){
            temp[i].style.display = "none";
            i++;
            temp[i].style.display = "inline-block";
        }
        setEnergyList(temp);
        console.log('Energy Level: ' + energy);
    }

    let happinessListInit = [
        <blackStar key="1" onClick={() => {handleHappinessClick(1)}} className="stars"></blackStar>,
        <goldStar key="2" onClick={() => {handleHappinessClick(1)}} className="goldStars"></goldStar>,
        <blackStar key="3" onClick={() => {handleHappinessClick(2)}} className="stars"></blackStar>,
        <goldStar key="4" onClick={() => {handleHappinessClick(2)}} className="goldStars"></goldStar>,
        <blackStar key="5" onClick={() => {handleHappinessClick(3)}} className="stars"></blackStar>,
        <goldStar key="6" onClick={() => {handleHappinessClick(3)}} className="goldStars"></goldStar>,
        <blackStar key="7" onClick={() => {handleHappinessClick(4)}} className="stars"></blackStar>,
        <goldStar key="8" onClick={() => {handleHappinessClick(4)}} className="goldStars"></goldStar>,
        <blackStar key="9" onClick={() => {handleHappinessClick(5)}} className="stars"></blackStar>,
        <goldStar key="10" onClick={() => {handleHappinessClick(5)}} className="goldStars"></goldStar>
    ]

    const [happinessList, setHappinessList] = useState(happinessListInit);

    handleHappinessClick = (level) => {
        happiness = level;
        let temp = happinessList;
        for(let i = 0; i < temp.length()/2; i++){
            temp[i].style.display = "inline-block";
            i++;
            temp[i].style.display = "none";
        }
        for(let i = 0; i < level; i++){
            temp[i].style.display = "none";
            i++;
            temp[i].style.display = "inline-block";
        }
        setHappinessList(temp);
        console.log('Happiness Level: ' + happiness);
    }

    let excitementListInit = [
        <blackStar key="1" onClick={() => {handleExcitementClick(1)}} className="stars"></blackStar>,
        <goldStar key="2" onClick={() => {handleExcitementClick(1)}} className="goldStars"></goldStar>,
        <blackStar key="3" onClick={() => {handleExcitementClick(2)}} className="stars"></blackStar>,
        <goldStar key="4" onClick={() => {handleExcitementClick(2)}} className="goldStars"></goldStar>,
        <blackStar key="5" onClick={() => {handleExcitementClick(3)}} className="stars"></blackStar>,
        <goldStar key="6" onClick={() => {handleExcitementClick(3)}} className="goldStars"></goldStar>,
        <blackStar key="7" onClick={() => {handleExcitementClick(4)}} className="stars"></blackStar>,
        <goldStar key="8" onClick={() => {handleExcitementClick(4)}} className="goldStars"></goldStar>,
        <blackStar key="9" onClick={() => {handleExcitementClick(5)}} className="stars"></blackStar>,
        <goldStar key="10" onClick={() => {handleExcitementClick(5)}} className="goldStars"></goldStar>
    ]

    const [excitementList, setExcitementList] = useState(excitementListInit);

    handleExcitementClick = (level) => {
        excitement = level;
        let temp = excitementList;
        for(let i = 0; i < temp.length()/2; i++){
            temp[i].style.display = "inline-block";
            i++;
            temp[i].style.display = "none";
        }
        for(let i = 0; i < level; i++){
            temp[i].style.display = "none";
            i++;
            temp[i].style.display = "inline-block";
        }
        setExcitementList(temp);
        console.log('excitement Level: ' + excitement);
    }
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

          <div className="title">
            <h1> PRE-ACTIVITY MINDFULNESS </h1>
            <p className="titleSubscript">(BEFORE YOU BEGIN, PLEASE FILL OUT THIS QUICK SURVEY)</p>
            <hr className="lineBreak"/>
          </div>

        <div className="InfoContainer">
            <div className="description">
                <h3>What would you rate your current engergy level?</h3>
                <div className="starsContainer">
                    {energyList}
                </div>
            </div>

            <div className="description">
                <h3>How happy are you currently feeling?</h3>
                <div className="starsContainer">
                    {happinessList}
                </div>
            </div>

            <div className="description">
                <h3>How excited are you about doing this session?</h3>
                <div className="starsContainer">
                    {excitmentList}
                </div>
            </div>
        </div>

        <div className="textContainer">
            <textarea value={notes} onInput={e => setNotes(e.target.value)} className="textBox" type="text" placeholder="Notes..."></textarea>
        </div>

        <Link to={`/in-progress/in-progress/${activityID}`}>
            <div className="buttonContainer">
                <button onClick={() => console.log('"begin activity" button pressed!')} className="beginButton" type="button">Begin Activity</button>
            </div>
        </Link>
        </main>
      </div>
    );
  };

  const mapStateToProps = (state) => {
    return {
      preEnergy: state.energy,
      preHappiness: state.happiness,
      preExcitement: state.excitment,
      preNotes: state.notes
    };
  };

  export default connect(mapStateToProps)(Mindfulness);