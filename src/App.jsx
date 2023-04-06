import React, { useState, useEffect } from 'react'
import Main from "./containers/Main/Main";
import NavBar from './containers/NavBar/NavBar';
import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.punkapi.com/v2/beers');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);
  return (
    <div className='beers'>
      <h1>Beer Encyclopedia</h1>
      <div className='beers__layout'>
        <NavBar beers={data}/>
        <Main beers={data}/>
      </div>

    </div>
  )
}

export default App