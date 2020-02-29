import React from 'react';
import './WaitVideoPage.css'
import axios from 'axios';
import { shareResult } from '../services/lab';
import useInterval from 'use-interval'

const WaitVideoPage = (props) => {
  const {videoId, setPage, startPage} = props;
  const url = 'https://youtu.be/3IVIiduNI5E';
  const share = async () => {
    const res = await shareResult(url);
    if (res) {
      goHome();
    }
  };

  const goHome = () => {
    setPage(startPage);
  };

  return (<div className="wait_page">
    <iframe width="420" height="315"
      src={url}>
    </iframe>
    {/*{videoId}*/}
    <button className="take_photo_button__label" onClick={goHome}>TRY AGAIN</button>
    <button className="take_photo_button__label" onClick={share}>
      SHARE
    </button>
  </div>)
};

export default WaitVideoPage;
