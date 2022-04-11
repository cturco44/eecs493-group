import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import './landing_page.css';


const LandingPage = () => {
  const [name, setName] = useState("Enter your name");

  return (
    <div>
      <div className = "bg">

      <div className="header" id="Welcome">
        <h1> WELCOME </h1>
      </div>

      <form>
        <input type="text" value={name} placeholder="Enter Your Name" onChange={e => setName(e.target.value)}/>
      </form>

      <Link to="../selection-page/selection-page">
        <input type="button" className="StartButt" value="Start Session" />

      </Link>
      </div>
    </div>

  );
}

export default LandingPage;