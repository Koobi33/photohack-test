import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import arm from '../images/arm.png';
import boss_glasses from '../images/boss_glasses.png';
import in_love_emoji from '../images/in_love_emoji.png';
import arm2 from '../images/arm2.png';
import leg from '../images/leg.png';
import leg2 from '../images/leg2.png';
import godzilla from '../images/godzilla.png';
import bang from '../images/bang.png';
import star from '../images/star.png';
import godzilla2 from '../images/godzilla2.png';
import hmm_emoji from '../images/hmm_emoji.png';
import wow_emoji from '../images/wow_emoji.png';
import { callMethod } from '../services/lab';
import { pickPictures } from '../services/lab';

const StartPage = (props) => {
  const { handlePhoto } = props;

  const getPhoto = async () => {
    const photos = await pickPictures();
    // const photos = await callMethod('nativePhotoSelect', {
    //   use_crop: 0,
    //   func: 'sendPhotos',
    // });
    handlePhoto({ photos });
  };

    return (
      <div>
        <img src={arm} className="arm animated infinite bounce delay-1s" alt="logo"/>
        <img src={boss_glasses} className="boss_glasses animated infinite pulse delay-1s" alt="logo"/>
        <img src={in_love_emoji} className="in_love_emoji animated infinite shake delay-1s" alt="logo"/>
        <img src={arm2} className="arm2 animated infinite bounce delay-1s" alt="logo"/>
        <img src={leg} className="leg animated infinite swing delay-1s" alt="logo"/>
        <img src={leg2} className="leg2 animated infinite swing delay-1s" alt="logo"/>
        <img src={godzilla} className="godzilla animated infinite wobble delay-1s" alt="logo"/>
        <img src={bang} className="bang animated infinite heartBeat delay-1s" alt="logo"/>
        <img src={star} className="star animated infinite wobble delay-1s" alt="logo"/>
        <img src={godzilla2} className="godzilla2 animated infinite bounce " alt="logo"/>
        <img src={hmm_emoji} className="hmm_emoji" alt="logo"/>
        <img src={wow_emoji} className="wow_emoji animated infinite bounceOutLeft delay-3s" alt="logo"/>
        <img src={wow_emoji} className="wow_emoji animated infinite bounceInLeft  delay-3s" alt="logo"/>

        <div className="content_container">
          <p className='call_text'>
            DON’T MISS<br/>
            YOUR CHANCE<br/>
            TO MESS UP<br/>
            WITH GODZILLA!<br/>
          </p>
          <label
            onClick={async () => {
              const url = await getPhoto();
              window.location.assign(url)
            }}
            htmlFor="photo" className="take_photo_button__label">TAKE A PHOTO</label>
        </div>
      </div>
    );
};

export default StartPage;
