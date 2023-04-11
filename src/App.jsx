import React, { useState, useEffect } from 'react'
import Main from "./containers/Main/Main";
import NavBar from './containers/NavBar/NavBar';
import "./App.scss";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [abvHighFilter, setAbvHighFilter] = useState(false);
  const [checked, setChecked] = useState(false);


  const fetchData = async () => {

  let allBeers = [];

  for (let page = 1; page <= 5; page++) {
    const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=80`);
    const json = await response.json();
    allBeers = [...allBeers, ...json];
  }
  setFilteredBeers(allBeers);
  }; 

  useEffect(() => {
    fetchData();
  }, []);


  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput)
  };

  const handleAbvHigh = () => {
    setAbvHighFilter(!abvHighFilter);
    setChecked(!checked);
    console.log("It works");
  }


  const filteredBeerLower = filteredBeers.filter((beer) =>{
    const beerLower = beer.name.toLowerCase()
    return beerLower.includes(searchTerm) ;
  });

  const highAbvBeers = filteredBeerLower.filter((beer) => beer.abv >= 6);

  const lowAbvBeers = filteredBeerLower.filter((beer) => beer.abv < 6);

  return (
    <div className='beers'>
      <h1>Beer Encyclopedia</h1>
      <div className='beers__layout'>
        <NavBar beers={filteredBeerLower} handleInput={handleInput} handleAbvHigh={handleAbvHigh} checked={checked}/>
        <Main beers={filteredBeerLower}/>
      </div>

    </div>
  )
}

export default App

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://api.punkapi.com/v2/beers');
  //     const json = await response.json();
  //     setData(json);
  //   };
  //   fetchData();
  // }, []);

    // const fetchData = async () => {
  //   const response = await fetch('https://api.punkapi.com/v2/beers?page=5&per_page=50');
  //   const json = await response.json();
  //   setData(json);
  // };
  // fetchData();
//Make changes to the api 