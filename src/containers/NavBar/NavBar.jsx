import React from 'react'
import "../../App.scss";
import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';

const NavBar = (props) => {
  const {beers, handleInput, handleAbvHigh, checked} = props;
      

  return (
    <div className='beers__NavBar'>
      <SearchBar beers={beers}
      handleInput={handleInput}
      />
      <Filters beers={beers}
      handleAbvHigh={handleAbvHigh}
      checked={checked}/>
    </div>
  )
}

export default NavBar