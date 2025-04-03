

import React, { useState } from "react";
import './JoinNow.css';
import JoinNowForm from "./JoinNowForm";

const JoinNow = () => {
  const [showForm, setShowForm] = useState(false);

  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="join-now-container">
      <div className="join-now-header">
        <h2>Join Our Gym Now!</h2>
        <p>Become a part of our fitness community and transform your body!</p>
      </div>
      
      <div className="cards-container">
        <div className="card">
          <h3 style={{ backgroundColor: "#34495e"}}>Get Fit</h3>
          <p style={{ backgroundColor: "#34495e"}} >Our gym offers a variety of fitness programs to help you get in shape and achieve your health goals.</p>
        </div>
        <div className="card">
          <h3 style={{ backgroundColor: "#34495e"}}>Expert Trainers</h3>
          <p style={{ backgroundColor: "#34495e"}}>Our certified trainers provide personalized guidance to ensure you get the most out of your workout.</p>
        </div>
        <div className="card">
          <h3 style={{ backgroundColor: "#34495e"}}>State-of-the-Art Equipment</h3>
          <p style={{ backgroundColor: "#34495e"}}>Work out using the latest equipment, designed for maximum comfort and performance.</p>
        </div>
      </div>

      <button
        className="join-now-button"
        onClick={toggleForm}
      >
        Join Now
      </button>

      {/* Show the form when button is clicked */}
      {showForm && (
        <>
         <JoinNowForm/>
        </>
      )}
    </div>
  );
};

export default JoinNow;
