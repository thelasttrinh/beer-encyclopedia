import React from 'react'

const Cards = (props) => {
  const {beers, handleTruncate, handleToolTip} = props;

  return (
    <div className='beers__main__CardList_Cards'>
      <img src={beers.image_url} alt={beers.tagline}/>
      <a href="#" onClick={handleToolTip}>{beers.name}</a>
      <p >{handleTruncate(beers.description)}</p>
    </div>
  )
}

export default Cards