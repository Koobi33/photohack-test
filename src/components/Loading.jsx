import React, { useState } from 'react';
import boss_glasses from '../images/boss_glasses.png';
import useInterval from 'use-interval';

const randomWords = [
    'TRYING TO CONFIGURE [DATA EXPUNGED] TO BE SAFE [DATA EXPUNGED]...',
    'TRAIN BEARS...',
    'TEASING GODZILLA...',
    'CUSTOMIZING BALALAIKA...',
    'ORDERING FAST FOOD...',
    'CLEANING STREETS...',
    'PREPARING CUPCAKES...',
    'MAKING A FOIL HAT...',
    'REPAIRING SHARE BUTTON...',
    'GIVE DEVELOPERS MORE TIME TO DEVELOP...',
    'CLEARING BROWSER HISTORY...',
    'TIKTOK MUSIC DELIVERING...',
    'COPY AND PASTING LOADING TEXT...',
];

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const Loading = () => {
    const [loadingText, setLoadingText] = useState(randomWords[0]);
    useInterval(() => {
        const random = randomInteger(0, randomWords.length - 1);
        setLoadingText(randomWords[random]);
    }, 3000);
    return (
      <>
          <div className="wait_page">
              <div className="wait_page_image_container">
                  <img src={boss_glasses} className="loading" alt="logo"/>
              </div>
              <div className="wait_page_text_container">
                  <span className="sorry_text">(this can take about 10-20 sec)</span>
                  <span className="loading_text">{loadingText}</span>
              </div>
          </div>
      </>);
};

export default Loading;
