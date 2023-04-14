import React from 'react'
import "../../App.scss";

const SearchBar = (props) => {
    const {searchTerm, handleInput} = props;
  return (
    <div>
      <input type='text' 
      placeholder='Search name of beer...' 
      value={searchTerm}
      onChange={handleInput}
      className='beer__NavBar--SearchBar'>
      </input>
    </div>
  )
}

export default SearchBar