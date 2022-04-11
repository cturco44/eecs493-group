import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

import { connect } from 'react-redux';
import { selectCategory } from '../redux/Acts/actsActions';

function Home({ selectCategory }) {
  return (
    <div className="home">
      <button onClick={() => selectCategory('social')}>Social</button>
      <button onClick={() => selectCategory('mental')}>Mental</button>
      {/* <Link to="/activities-list">find activities</Link> */}


      <Link to="/help-start">start help</Link>
      <Link to="/help-activities-list">activities help</Link>
      <Link to="/in-progress">in progress</Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCategory: (cat) => dispatch(selectCategory(cat)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
