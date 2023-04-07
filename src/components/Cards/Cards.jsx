import React, { useState } from 'react';
import ToolTip from '../ToolTip/ToolTip';

const Cards = (props) => {
  const {beers, handleTruncate} = props;
  const [showMyComponent, setShowMyComponent] = useState(false);

  const handleClick = () => {
    setShowMyComponent(true);
  };

  return (
    <div className='beers__main__CardList_Cards'>
      <img src={beers.image_url} alt={beers.tagline}/>
      <a href="#" onClick={handleClick}>
        {beers.name}
        </a>
      {showMyComponent && <ToolTip name={beers.name} />}
      <p >{handleTruncate(beers.description)}</p>
    </div>
  )
}

export default Cards