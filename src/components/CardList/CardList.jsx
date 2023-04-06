import React from 'react'
//@ts-ignore
import Cards from '../Cards/Cards';
import "../../App.scss";

const CardList = (props) => {
    const {beers} = props;
  return (
    
    //Use map for display cards
    <div>
        {beers.map((beer) => 
        <div className='beers__main__CardList'>
            <Cards beers={beer}/>
        </div>)}
    </div>
  )
}

export default CardList