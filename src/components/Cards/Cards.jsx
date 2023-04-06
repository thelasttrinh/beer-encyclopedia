import React from 'react'

const Cards = (props) => {
  const {beers} = props;
  return (
    <div className='beers__main__CardList_Cards'>
      <img src={beers.image_url} alt={beers.tagline}/>
    </div>
  )
}

export default Cards