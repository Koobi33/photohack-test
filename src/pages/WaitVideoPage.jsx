import React, {useEffect, useState} from 'react';
import Loading from '../components/Loading';
import './WaitVideoPage.css'
import axios from 'axios';
import { shareResult } from '../services/lab';
import useInterval from 'use-interval'

const WaitVideoPage = (props) => {
  const {videoId, setPage, startPage} = props;

  const share = async () => {
    const res = await shareResult(videoId);
    if (res) {
      goHome();
    }
  };

  const getVideoId = (id) => {
      return 'https' + id.slice(5);
  };
  const goHome = () => {
    setPage(startPage);
  };

  return (<div className="wait_page">
    <iframe width="420" height="315"
      src={getVideoId(videoId)}>
    </iframe>
    <button className="take_photo_button__label" onClick={goHome}>TRY AGAIN</button>
    <button className="take_photo_button__label" onClick={share}>
      SHARE
    </button>
  </div>)
};

export default WaitVideoPage;
