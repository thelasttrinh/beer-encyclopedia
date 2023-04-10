import React, { useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ToolTip = (props) => {
  const {name, tagline, first, abv, ph, pairing, tips, desc, handleClick} = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    handleClick();
  };

  return (
    <>
    {isOpen && <div className='beers__main__CardList_Cards--ToolTip--Overlay' onClick={handleClose}></div>}
    <div className='beers__main__CardList_Cards--ToolTip'>
      <FontAwesomeIcon icon={faXmark} onClick={handleClose} className='beers__main__CardList_Cards--ToolTip--faXmark'/>
      Name: {name} <br/>
      Tagline: {tagline} <br/>
      First Brewed: {first} <br/>
      Description: {desc} <br/>
      ABV: {abv} <br/>
      PH: {ph} <br/>
      Food Pairing: {pairing} <br/>
      Brewer Tips: {tips} 
    </div>
    </>
  )
}

export default ToolTip