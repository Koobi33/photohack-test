import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import arm from '../src/images/arm.png';
import arm2 from '../src/images/arm2.png';
import godzilla from '../src/images/godzilla.png';
import godzilla2 from '../src/images/godzilla2.png';
import bang from '../src/images/bang.png';
import boss_glasses from '../src/images/boss_glasses.png';
import hmm_emoji from '../src/images/hmm_emoji.png';
import in_love_emoji from '../src/images/in_love_emoji.png';
import leg from '../src/images/leg.png';
import leg2 from '../src/images/leg2.png';
import star from '../src/images/star.png';
import wow_emoji from '../src/images/wow_emoji.png';

function App() {
  const [photoData, setPhotoData] = useState(null);
  const handlePhoto = async () => {
    const data = new FormData();
    data.append('proverochka', photoData);
    const params = {
      headers: {
        'ContentType': 'application/multipart/form-data'
      }
    };
      const resp = await axios.post('http://se.ws.pho.to:5000/api/photo/upload', data, params);
  };
  useEffect(() => {
    axios.get('http://se.ws.pho.to:5000/api/photo/test');
  }, []);
  useEffect(() => {
    if (photoData) {
      handlePhoto();
    }
  }, [photoData]);
  return (
    <div className="content">
      <div>
        <img src={arm} className="arm" alt="logo" />
        <img src={boss_glasses} className="boss_glasses" alt="logo" />
        <img src={in_love_emoji} className="in_love_emoji" alt="logo" />
        <img src={arm2} className="arm2" alt="logo" />
        <img src={leg} className="leg" alt="logo" />
        <img src={leg2} className="leg2" alt="logo" />
        <img src={godzilla} className="godzilla" alt="logo" />
        <img src={bang} className="bang" alt="logo" />
        <img src={star} className="star" alt="logo" />
        <img src={godzilla2} className="godzilla2" alt="logo" />
        <img src={star} className="star2" alt="logo" />
        <img src={hmm_emoji} className="hmm_emoji" alt="logo" />
        <img src={wow_emoji} className="wow_emoji" alt="logo" />

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
          <label for="photo" className="take_photo_button__label">TAKE A PHOTO</label>
        </div>
      </div>
    </div>
  );
}

export default App;
