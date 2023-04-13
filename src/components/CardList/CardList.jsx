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

  const uniqueBeerIds = new Set();

  return (
    // Use map for display cards
    <div>
        {beers.map((beer) => {
          // If beer id already exists in the Set, skip rendering
          if (uniqueBeerIds.has(beer.id)) {
            return null;
          }
          // Otherwise, add beer id to the Set and render the card
          uniqueBeerIds.add(beer.id);
          return (
            <div className='beers__main__CardList'>
              <Cards beers={beer} handleTruncate={handleTruncate} />
            </div>
          );
        })}
    </div>
  );
}

export default CardList