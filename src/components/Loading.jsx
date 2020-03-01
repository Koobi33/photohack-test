import React from 'react';
import boss_glasses from '../images/boss_glasses.png';

const Loading = () => {
    return (
      <div className="wait_page">
        <img src={boss_glasses} className="loading" alt="logo"/>
        <span className="call_text">THE BATTLE IS ON</span>
        <span className="sorry_text">(this can take about 10-20 sec)</span>
      </div>
    );
};

export default Loading;
