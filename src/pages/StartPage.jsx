import React, { useState, useEffect } from 'react';
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

const StartPage = (props) => {
  const { handlePhoto } = props;
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    if (photoData) {
      handlePhoto(photoData);
    }
  }, [photoData]);
    return (
      <div>
        <img src={arm} className="arm" alt="logo"/>
        <img src={boss_glasses} className="boss_glasses" alt="logo"/>
        <img src={in_love_emoji} className="in_love_emoji" alt="logo"/>
        <img src={arm2} className="arm2" alt="logo"/>
        <img src={leg} className="leg" alt="logo"/>
        <img src={leg2} className="leg2" alt="logo"/>
        <img src={godzilla} className="godzilla" alt="logo"/>
        <img src={bang} className="bang" alt="logo"/>
        <img src={star} className="star" alt="logo"/>
        <img src={godzilla2} className="godzilla2" alt="logo"/>
        <img src={star} className="star2" alt="logo"/>
        <img src={hmm_emoji} className="hmm_emoji" alt="logo"/>
        <img src={wow_emoji} className="wow_emoji" alt="logo"/>

        {/*<input type="file" onChange={(e) => setPhotoData(e.target.files[0])} accept="image/*;capture=camera" ></input>*/}
        <div className="content_container">
          <p className='call_text'>
            DON’T MISS<br/>
            YOUR CHANCE<br/>
            TO MESS UP<br/>
            WITH GODZILLA!<br/>
          </p>
          <input
            id="photo"
            name="photo"
            type="file"
            onChange={(e) => setPhotoData(e.target.files[0])}
            accept="image/*;capture=camera"
            className="take_photo_button"
          />
          <label htmlFor="photo" className="take_photo_button__label">TAKE A PHOTO</label>
        </div>
      </div>
    );
};

export default StartPage;
