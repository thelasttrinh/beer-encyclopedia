import React from 'react'

const CardList = (props) => {
    const {beers} = props;
  return (
    
    //Use map for display cards
    <div>
        {beers.map((beer) => 
        <div>
            <img src={beer.image_url}/>
        </div>)}
    </div>
  )
}

export default CardList