import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import styles from './LandingPage.module.css';


const LandingPage = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <div className = {styles.bg}>

      <div className={styles.header} id="Welcome">
        <h1> WELCOME </h1>
      </div>

      <form>
        <input type="text" value={name} placeholder="Enter Your Name" onChange={e => setName(e.target.value)}/>
      </form>

      <Link to="../selection-page/selection-page">
        <input type="button" className={styles.StartButt} value="Start Session" />

      </Link>
      </div>
    </div>

  );
}

export default LandingPage;