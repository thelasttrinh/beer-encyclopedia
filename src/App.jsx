import React, { useState, useEffect } from 'react'
import Main from "./containers/Main/Main";
import NavBar from './containers/NavBar/NavBar';
import "./App.scss";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [abvHighFilter, setAbvHighFilter] = useState(false);
  const [phHighFilter, setPhHighFilter] = useState(false);
  const [checkedAbv, setCheckedAbv] = useState(false);
  const [checkedPh, setCheckedPh] = useState(false);

  const fetchData = async () => {
    let allBeers = [];
  
    // Construct the API URL based on the state of your checkboxes
    let url = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';
    if (abvHighFilter) {
      url += '&abv_gt=6';
    } else if (!abvHighFilter){
      url = url.replace('&abv_gt=6', '');
      console.log(url);
    }

    // const res = await fetch(url);
    // const json = await res.json();

    for (let page = 1; page <= 5; page++) {
      const response = await fetch(url);
      const json = await response.json();
      allBeers = [...allBeers, ...json];
    }

  setFilteredBeers(allBeers);
  };

  //Display all beers on load & changes based on filters being active
  //Prevents direct fetch calls
  useEffect(() => {
    fetchData();
  }, [abvHighFilter, phHighFilter]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput)
  };

  const handleAbvHigh = () => {
    setAbvHighFilter(!abvHighFilter);
    setCheckedAbv(!checkedAbv);

    // fetchData();
  }

  const handlePhHigh = () => {
    setPhHighFilter(!phHighFilter);
    setCheckedPh(!checkedPh);

    // fetchData();
  }

  const filteredBeerLower = filteredBeers.filter((beer) =>{
    const beerLower = beer.name.toLowerCase()
    //If filter is active = filter all beers by ph < 4.0
    let phHighPass = !phHighFilter || (phHighFilter && beer.ph < 4.0);
    return beerLower.includes(searchTerm) && phHighPass;
  });

  return (
    <div className='beers'>
      <h1>Beer Encyclopedia</h1>
      <div className='beers__layout'>
        <NavBar beers={filteredBeerLower} handleInput={handleInput}
         handleAbvHigh={handleAbvHigh} handlePhHigh={handlePhHigh} 
         checkedAbv={checkedAbv} checkedPh={checkedPh}/>
        <Main beers={filteredBeerLower}/>
      </div>

    </div>
  )
}

export default App

// If no filters are active, set all beers to filtered beers
    // if (!searchTerm && !abvHighFilter) {
    //   setFilteredBeers(json);
    // }
  
    //Track what page of data we are on
    // let currentPage = 1;
    // let totalPages = 1;
  
    // Fetch all pages using pagination
    // while (currentPage <= totalPages) {
    //   //Fetch data per page & increments
    //   const res = await fetch(`${url}&page=${currentPage}`);
    //   const data = await res.json();
    //   allBeers = [...allBeers, ...data];
    //   currentPage++;
    //   //Checks amount of pages in api via X-Total-Count and updates totalPages
    //   if (res.headers.has('X-Total-Count')) {
    //     const totalCount = parseInt(res.headers.get('X-Total-Count'));
    //     totalPages = Math.ceil(totalCount / 80);
    //   }
    // }
