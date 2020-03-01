import React from 'react';
import './WaitVideoPage.css'
import { shareResult } from '../services/lab';

const WaitVideoPage = (props) => {
  const {videoId, setPage, startPage} = props;

  const share = async () => {
    const res = await shareResult(videoId);
    if (res) {
      goHome();
    }
  };

  const goHome = () => {
    setPage(startPage);
  };

  return (<div className="wait_page">
    <video  width="420" height="340" autoPlay={true} controls loop>
      <source src={videoId.download_url} type="video/mp4"/>
    </video>
    <button className="take_photo_button__label" onClick={goHome}>TRY AGAIN</button>
    <button className="take_photo_button__label" onClick={share}>
      SHARE
    </button>
  </div>)
};

export default WaitVideoPage;
