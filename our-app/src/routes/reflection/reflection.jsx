import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as Report } from './../../images/icon-report.svg';
import { ReactComponent as Back } from './../../images/back-arrow-to-first-track-svgrepo-com 1.svg';
import { ReactComponent as Home } from './../../images/home-button.svg';
import { ReactComponent as Help } from './../../images/help-button.svg';
import { ReactComponent as Blackstar } from './../../images/star-black.svg';
import { ReactComponent as Goldstar } from './../../images/star-gold.svg';
import { connect } from 'react-redux';
import './reflection.css';
import {useParams} from 'react-router-dom'


const Reflection = () => {
    let energy = 0;
    let happiness = 0;
    let excitement = 0;
    const [notes, setNotes] = useState("");

    let params = useParams();
    let activityID = parseInt(params.actId, 10);

    const [energyList, setEnergyList] = useState([
        <Blackstar onClick={() => {handleEnergyClick(1)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleEnergyClick(2)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleEnergyClick(3)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleEnergyClick(4)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleEnergyClick(5)}} className="stars"></Blackstar>,
    ]);

    const handleEnergyClick = (level) => {
        energy = level;
        console.log('Energy Level: ' + energy);
        let temp = [];
        let j = 0;
        for(let i = 0; i < level; i++){
            temp.push(<Goldstar onClick={() => {handleEnergyClick(i+1)}} className="stars"></Goldstar>);
            j++;
        }
        for(let i = j; i < 5; i++){
            temp.push(<Blackstar  onClick={() => {handleEnergyClick(i+1)}} className="stars"></Blackstar>);
        }
        setEnergyList(temp);
    }

    const [happinessList, setHappinessList] = useState([
        <Blackstar onClick={() => {handleHappinessClick(1)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleHappinessClick(2)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleHappinessClick(3)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleHappinessClick(4)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleHappinessClick(5)}} className="stars"></Blackstar>,
    ]);

    const handleHappinessClick = (level) => {
        happiness = level;
        console.log('Happiness Level: ' + happiness);
        let temp = [];
        let j = 0;
        for(let i = 0; i < level; i++){
            temp.push(<Goldstar onClick={() => {handleHappinessClick(i+1)}} className="stars"></Goldstar>);
            j++;
        }
        for(let i = j; i < 5; i++){
            temp.push(<Blackstar  onClick={() => {handleHappinessClick(i+1)}} className="stars"></Blackstar>);
        }
        setHappinessList(temp);
    }

    const [excitementList, setExcitementList] = useState([
        <Blackstar onClick={() => {handleExcitementClick(1)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleExcitementClick(2)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleExcitementClick(3)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleExcitementClick(4)}} className="stars"></Blackstar>,
        <Blackstar onClick={() => {handleExcitementClick(5)}} className="stars"></Blackstar>,
    ]);

    const handleExcitementClick = (level) => {
        excitement = level;
        console.log('Excitement Level: ' + excitement);
        let temp = [];
        let j = 0;
        for(let i = 0; i < level; i++){
            temp.push(<Goldstar onClick={() => {handleExcitementClick(i+1)}} className="stars"></Goldstar>);
            j++;
        }
        for(let i = j; i < 5; i++){
            temp.push(<Blackstar  onClick={() => {handleExcitementClick(i+1)}} className="stars"></Blackstar>);
        }
        setExcitementList(temp);
    }

    const handleButtonClick = () => {
        console.log('"begin activity" button pressed!')
        console.log("postEnergy: " + energy);
        console.log("postHappiness: " + happiness);
        console.log("postExcitement: " + excitement);
        console.log("postNotes: " + notes);
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
            <h1> POST-ACTIVITY REFLECTION </h1>
            <p className="titleSubscript">(PLEASE TAKE THE TIME TO REFLECT ON YOUR EXPERIENCE)</p>
            <hr className="lineBreak"/>
          </div>

        <div className="InfoContainer">
            <div className="description">
                <h3>What would you rate your current energy level?</h3>
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
                <h3> How much did you enjoy this session?</h3>
                <div className="starsContainer">
                    {excitementList}
                </div>
            </div>
        </div>

        <div className="textContainer">
            <textarea value={notes} id="userInput" onInput={e => setNotes(e.target.value)} className="textBox" type="text" placeholder="Notes..."></textarea>

        </div>
        
        <Link to={"/"}> {/* TODO: change */}
            <div className="buttonContainer">
                    <button onClick={() => handleButtonClick()} className="beginButton" type="button">Finish Activity</button>
            </div>
        </Link>
        </main>
      </div>
    );
  };

  const mapStateToProps = (state) => {
    return {
      postEnergy: state.energy,
      postHappiness: state.happiness,
      postExcitement: state.excitment,
      postNotes: state.notes
    };
  };


  export default connect(mapStateToProps)(Reflection);





  
  
  
  
 