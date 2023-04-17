import React, { useState, useEffect } from 'react'
import Main from "./containers/Main/Main";
import NavBar from './containers/NavBar/NavBar';
import "./App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [abvHighFilter, setAbvHighFilter] = useState(false);
  const [phHighFilter, setPhHighFilter] = useState(false);
  const [checkedAbv, setCheckedAbv] = useState(false);
  const [checkedPh, setCheckedPh] = useState(false);
  const [classicFilter, setClassicFilter] = useState(false);
  const [checkedClassic, setCheckedClassic] = useState(false);
  const [page, setPage] = useState(1);

  let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=18`;
  
  const fetchData = async () => {
    let allBeers = [];

    // Construct the API URL based on params & state of checkboxes
    if (abvHighFilter) {
      url += '&abv_gt=6';
    } else if (!abvHighFilter){
      url = url.replace('&abv_gt=6', '');
    }

    if(classicFilter){
      url += '&brewed_before=01-2010'
    }else  if (!classicFilter){
      url = url.replace('&brewed_before=01-2010', '');
    }

    const response = await fetch(url);
    const json = await response.json();
    allBeers = [...allBeers, ...json];
    
    setFilteredBeers(allBeers);
  };

  //Display all beers on load & changes based on filters being active
  //Prevents direct fetch calls
  useEffect(() => {
    fetchData();
  }, [abvHighFilter, phHighFilter,classicFilter, searchTerm, page]);

  //Handles for filters

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput)
  };

  const handleAbvHigh = () => {
    setAbvHighFilter(!abvHighFilter);
    setCheckedAbv(!checkedAbv);
  }

  const handlePhHigh = () => {
    setPhHighFilter(!phHighFilter);
    setCheckedPh(!checkedPh);
  }

  const handleClassic = () => {
    setClassicFilter(!classicFilter);
    setCheckedClassic(!checkedClassic);
  }

  //Beer gallery to see all beers by increment/decrement pages

  const incrementPage = () => {
    if(page > filteredBeers.length){
      setPage(1);
    }else{
      setPage(page + 1);
    }
  };

  const decrementPage = () => {
    if(page <= 1){
      setPage(filteredBeers.length + 1);
    }else{
      setPage(page - 1);
    }
  };

  //Search bar for beers

  const filteredBeerLower = filteredBeers.filter((beer) =>{
    //If searching by term, api checks every 80 beers per page due to api limitations
    if(searchTerm){
      url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=80`;
    }
    const beerLower = beer.name.toLowerCase()
    //If filter is active = filter all beers by ph < 4.0
    let phHighPass = !phHighFilter || (phHighFilter && beer.ph < 4.0);
    return beerLower.includes(searchTerm) && phHighPass;
  });

  return (
    <div className='beers'>
      <span className='beers__title'>
        <h1> Punk Beer API Encyclopedia</h1>
      </span>
      <div className='beers__layout'>
        <NavBar beers={filteredBeerLower} handleInput={handleInput}
         handleAbvHigh={handleAbvHigh} handlePhHigh={handlePhHigh} 
         checkedAbv={checkedAbv} checkedPh={checkedPh}
         handleClassic={handleClassic} checkedClassic={checkedClassic}/>
        <Main beers={filteredBeerLower}
        incrementPage={incrementPage} decrementPage={decrementPage}/>
      </div>
      <div className='beers_gallery'>
      <button onClick={decrementPage}  className='beers_gallery--minus'>
        <FontAwesomeIcon icon={faMinus} className='beers_gallery--minus'/></button>
      <span>Page: {page}</span>
      <button onClick={incrementPage} className='beers_gallery--plus'>
        <FontAwesomeIcon icon={faPlus} className='beers_gallery--plus'/></button>
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
