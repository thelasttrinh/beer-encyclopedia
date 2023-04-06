import React from 'react'
import CardList from '../../components/CardList/CardList'
import "../../App.scss";

const Main = (props) => {
  const {beers} = props;
  return (
    <div className='beers__main'>
      <CardList beers={beers}/>
    </div>
    
  )
}

export default Main