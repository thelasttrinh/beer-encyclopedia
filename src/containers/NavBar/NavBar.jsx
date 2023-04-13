import React from 'react'
import "../../App.scss";
import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';

const NavBar = (props) => {
  const {beers, handleInput, handleAbvHigh, checkedAbv, handlePhHigh, checkedPh} = props;
      

  return (
    <div className='beers__NavBar'>
      <SearchBar beers={beers}
      handleInput={handleInput}
      />
      <Filters
      handleAbvHigh={handleAbvHigh}
      handlePhHigh={handlePhHigh}
      checkedPh={checkedPh}
      checkedAbv={checkedAbv}/>
    </div>
  )
}

export default NavBar