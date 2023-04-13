import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ToolTip = (props) => {
  const {name, tagline, first, abv, ph, pairing, tips, desc, handleClick, style} = props;

  return (
    <div className='beers__main__CardList_Cards--ToolTip' style={style}>
      <FontAwesomeIcon icon={faXmark} onClick={handleClick} className='beers__main__CardList_Cards--ToolTip--faXmark'/>
      Name: {name} <br/>
      Tagline: {tagline} <br/>
      First Brewed: {first} <br/>
      Description: {desc} <br/>
      ABV: {abv} <br/>
      PH: {ph} <br/>
      Food Pairing: {pairing} <br/>
      Brewer Tips: {tips} 
    </div>
  )
}

export default ToolTip