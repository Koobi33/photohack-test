import React, {useEffect, useState} from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import Loading from '../components/Loading';
import './WaitVideoPage.css'
import axios from 'axios';
import useInterval from 'use-interval'

const WaitVideoPage = (props) => {
  const {videoId, setPage, startPage} = props;
  const [loading, setLoading] = useState(true);
  // const url = 'http://se.ws.pho.to:5000/api/video/';
  const url = "https://www.youtube.com/embed/mPVDGOVjRQ0";
  useInterval(async () => {
    if (loading && videoId) {
      const videoResp = await axios.get(`http://se.ws.pho.to:5000/api/video/${videoId}.mp4`);
      if (videoResp) {
        setLoading(false);
      }
    }
  }, 4000);

  useEffect(() => {
    if (videoId) {
      setLoading(false);
    }
  }, [videoId]);
  const goHome = () => {
    setPage(startPage);
  };

  function shareVideo(value) {
    if (value.result) {
      goHome()
    }
  }

  return (
    loading ? <Loading/> :
      (<div className="wait_page">
        <iframe width="420" height="315"
                // src={`${url}${videoId}.mp4`}>
                src={url}>
        </iframe>
        <button className="take_photo_button__label" onClick={goHome}>TRY AGAIN</button>
        <button className="take_photo_button__label" onClick={() =>
          `callback:nativeShareCustom?imageUrl=${url}&providers=[0,3,5,12]&func=shareVideo`}>
          SHARE
        </button>
        <Router>
          <Link to={`callback:nativeShareCustom?imageUrl=${url}&providers=[0,3,5,12]&func=appShare`}
           className=" take_photo_button__label">
          SHARE
          </Link>
        </Router>
      </div>)
  );
};

export default WaitVideoPage;
