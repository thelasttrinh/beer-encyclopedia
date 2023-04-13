import React, { useState } from 'react';
import ToolTip from '../ToolTip/ToolTip';
import noImage from '../../assets/images/No_image_available.svg.png'

const Cards = (props) => {
  const {beers, handleTruncate} = props;
  const [showToolTip, setToolTip] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  // const handleOpen = () => {
  //   setIsOpen(!isOpen);
  //   setToolTip(!showToolTip);
  // };

  const handleClick = () => {
    setIsOpen(!isOpen);
    setToolTip(!showToolTip);
  };

  return (
    <div className={`beers__main__CardList_Cards`}>
      <img src={beers.image_url || noImage} alt={beers.tagline}/>
      <a href="#" onClick={handleClick}>
      {handleTruncate(beers.name)}
        </a>
    <>
    {isOpen && <div className='beers__main__CardList_Cards--ToolTip--Overlay' onClick={handleClick}></div>}
      {showToolTip && <ToolTip key={beers.id} name={beers.name} 
      tagline={beers.tagline} first={beers.first_brewed} 
      abv={beers.abv} ph={beers.ph} pairing={beers.food_pairing} 
      tips={beers.brewers_tips} desc={beers.description}
      handleClick={handleClick} />}
      </>
      <p>{handleTruncate(beers.description)}</p>
    </div>
    
  )
}

export default Cards