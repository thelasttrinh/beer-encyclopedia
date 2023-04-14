import React, { useState } from 'react';
import ToolTip from '../ToolTip/ToolTip';
import noImage from '../../assets/images/No_image_available.svg.png'

const Cards = (props) => {
  const {beers, handleTruncate} = props;
  const [showToolTip, setToolTip] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  // const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // const handleOpen = () => {
  //   setIsOpen(!isOpen);
  //   setToolTip(!showToolTip);
  // };

  const handleClick = (event) => {
    setIsOpen(!isOpen);
    setToolTip(!showToolTip);
    event.preventDefault();

  };

  return (
    <div className='beers__main__CardList_Cards--border'>
      <div className={`beers__main__CardList_Cards`}>
      <img src={beers.image_url || noImage} alt={beers.tagline}/>
      <a href="#" onClick={handleClick}>
      {handleTruncate(beers.name)}
      </a>
      <p>{handleTruncate(beers.description)}</p>
      </div>
      
      <div>
      {isOpen && <div className='beers__main__CardList_Cards--ToolTip--Overlay'></div>}
      {showToolTip && <ToolTip name={beers.name} 
      tagline={beers.tagline} first={beers.first_brewed} 
      abv={beers.abv} ph={beers.ph} pairing={beers.food_pairing} 
      tips={beers.brewers_tips} desc={beers.description}
      handleClick={handleClick}/>}
      </div>
    </div>
    
  )
}

export default Cards
//style={{ top: tooltipPosition.y, left: tooltipPosition.x }}
    // if (!showToolTip) {
    //   // Calculate the position of the tooltip relative to the clicked element
    //   const rect = event.target.getBoundingClientRect();
    //   setTooltipPosition({ x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 });
    // }