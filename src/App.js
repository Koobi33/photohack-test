import React, { useState, useEffect } from 'react';
import './App.css';
import StartPage from './pages/StartPage';
import axios from 'axios';
import WaitVideoPage from './pages/WaitVideoPage';
import Loading from './components/Loading';

function App() {
  const [page, setPage] = useState(null);
  const handlePhoto = async (photoData) => {
    setPage(<Loading />);
    const data = new FormData();
    data.append('proverochka', photoData);
    const params = {
      headers: {
        'ContentType': 'application/multipart/form-data'
      }
    };
    const resp = await axios.post('http://se.ws.pho.to:5000/api/photo', data, params);
   if (resp.data) {
      setPage(<WaitVideoPage setPage={setPage} startPage={startPage} videoId={resp.data} />);
    } else {
     setPage(startPage);
   }
  };
  const startPage = (<StartPage setPage={setPage} handlePhoto={handlePhoto} />);
  useEffect(() => {
    setPage(startPage);
  }, []);
  return (
    <div className="content">
      {page}
    </div>
  );
}

export default App;
