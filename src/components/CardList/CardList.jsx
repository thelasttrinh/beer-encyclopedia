import React from 'react'
//@ts-ignore
import Cards from '../Cards/Cards';
import "../../App.scss";

const CardList = (props) => {
  const {beers} = props;

  const handleTruncate = (description) => {
    if(description.length > 30){
      return `${description.substring(0,30)}...`;
    }
    return description;
  };


  return (
    
    //Use map for display cards
    <div>
        {beers.map((beer) => 
        <div className='beers__main__CardList'>
          <Cards beers={beer} handleTruncate={handleTruncate} />
        </div>)}
    </div>
  )
}

export default CardList