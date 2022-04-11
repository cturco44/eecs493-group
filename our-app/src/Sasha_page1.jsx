import React from 'react';
import './landing_page.css';

function HomePage1(props) {
  return (
    <div className = "bg">

    <div className="header" id="Welcome">
      <h1> WELCOME </h1>
    </div>

    <form>
      <input type="fname" value="Enter Name Here"><br>
    </form>

    <input type="button" className="StartButt" value="Start Session">

    </div>
  );
}
