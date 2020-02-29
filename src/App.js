import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import StartPage from './pages/StartPage';
import axios from 'axios';
import WaitVideoPage from './pages/WaitVideoPage';
import Loading from './components/Loading';
import 'animate.css'
import { history } from './services/router';

function App() {
  const [page, setPage] = useState(null);
  const handlePhoto = async ({ photos }) => {
    const data = new FormData();
    const link = photos[0];
    data.append('test', link);
    setPage(<Loading />);
    const resp = await axios.post('http://se.ws.pho.to:5000/api/photo/upload-url', data);
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
    <Router>
      <div className="content">
        {page}
      </div>
    </Router>
  );
}

export default App;
