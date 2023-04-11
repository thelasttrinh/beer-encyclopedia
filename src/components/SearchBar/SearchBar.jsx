import React from 'react'

const SearchBar = (props) => {
    const {searchTerm, handleInput} = props;
  return (
    <div>
      <input type='text' 
      placeholder='Search name of beer...' 
      value={searchTerm}
      onChange={handleInput}>
      </input>
    </div>
  )
}

export default SearchBar