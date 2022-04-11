import React from 'react';
import './selection_page.css';

function ActivityButton(props) {
  return (
    <button className={props.ActivityButt}></button>
  );
}

function HomePage2(props) {
  return (
      <div className="topBuff"></div>

      <input type="button" className="report"></input>

      <div className = "header">
        <p> Hi, name! </p>
      </div>

      <div className = "minQ">
        <p> First, how many minutes want to be outside for? </p>
      </div>

      <form>
        <input type="fmins" value="20"><br></input>
      </form>

      <div className= "categoryQ">
        <p> Now, select categories you are interested in: </p>
      </div>

      <div class="actionButts">

        <ActivityButton ActivityButt="Social" className = 'Social'/>
        <ActivityButton ActivityButt="Exercise" className = 'Exercise'/>
        <ActivityButton ActivityButt="Mental" className = 'Mental'/>

      </div>

      <div class="bottBuff"></div>
  );
}

export ActivityButton;
