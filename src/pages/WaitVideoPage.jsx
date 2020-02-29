import React, {useEffect, useState} from 'react';
import Loading from '../components/Loading';
import './WaitVideoPage.css'
import axios from 'axios';
import { callMethod } from '../services/lab';
import useInterval from 'use-interval'

const WaitVideoPage = (props) => {
  const {videoId, setPage, startPage} = props;

  const share = async () => {
    return await callMethod('nativeShareCustom', {
      imageUrl: `http://se.ws.pho.to:5000/api/video/${videoId}`,
      providers: '[0,3,5,12]',
      close_after_share: 1,
      func: 'shareVideo()',
    });
  };

  const url = 'http://se.ws.pho.to:5000/api/video/';
  // const url = "https://www.youtube.com/embed/mPVDGOVjRQ0";
  // useInterval(async () => {
  //   if (loading && videoId) {
  //     const videoResp = await axios.get(`http://se.ws.pho.to:5000/api/video/${videoId}.mp4`);
  //     if (videoResp) {
  //       setLoading(false);
  //     }
  //   }
  // }, 4000);
  //
  // useEffect(() => {
  //   if (videoId) {
  //     setLoading(false);
  //   }
  // }, [videoId]);
  const goHome = () => {
    setPage(startPage);
  };

  function shareVideo(value) {
    if (value.result) {
      goHome()
    }
  }

  return (<div className="wait_page">
    <iframe width="420" height="315"
      src={`${url}${videoId}`}>
            {/*src={url}>*/}
    </iframe>
    <button className="take_photo_button__label" onClick={goHome}>TRY AGAIN</button>
    <button className="take_photo_button__label" onClick={async () => {
      const url = await share();
      window.location.assign(url)
    }}>
      SHARE
    </button>
  </div>)
};

export default WaitVideoPage;
