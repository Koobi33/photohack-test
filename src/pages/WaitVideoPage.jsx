import React from 'react';
import './WaitVideoPage.css'
import axios from 'axios';
import { shareResult } from '../services/lab';
import useInterval from 'use-interval'

const WaitVideoPage = (props) => {
  const {videoId, setPage, startPage} = props;
  const url = 'https://se.ws.pho.to:5000/api/video/get-stream/867ebab2-844a-4332-a419-7d0ca5a72a25';
  const share = async () => {
    const res = await shareResult({
      stream_url: url,
      download_url: url,
    });
    if (res) {
      goHome();
    }
  };

  const goHome = () => {
    setPage(startPage);
  };

  return (<div className="wait_page">
    {/*<iframe width="420" height="315"*/}
    {/*  src={videoId}>*/}
    {/*</iframe>*/}
    {/*{videoId}*/}
    <video src={url} width="320" height="240" autoPlay={true}/>
    <button className="take_photo_button__label" onClick={goHome}>TRY AGAIN</button>
    <button className="take_photo_button__label" onClick={share}>
      SHARE
    </button>
  </div>)
};

export default WaitVideoPage;
