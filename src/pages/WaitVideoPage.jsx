import React, {useEffect, useState} from 'react';
import './WaitVideoPage.css'
import axios from 'axios';
import { shareResult } from '../services/lab';
import useInterval from 'use-interval'

const WaitVideoPage = (props) => {
  const {videoId, setPage, startPage} = props;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setVideo(JSON.parse(videoId));
  }, [videoId]);

  const share = async () => {
    const res = await shareResult(video);
    if (res) {
      goHome();
    }
  };

  const goHome = () => {
    setPage(startPage);
  };

  return (<div className="wait_page">
    <video  width="320" height="240" loop autoPlay={true}>
      <source src={video.download_url} type="video/mp4"/>
      {/*<source src={videoId.stream_url} type="video/mp4"/>*/}
    </video>

    <button className="take_photo_button__label" onClick={goHome}>TRY AGAIN</button>
    <button className="take_photo_button__label" onClick={share}>
      SHARE
    </button>
  </div>)
};

export default WaitVideoPage;
