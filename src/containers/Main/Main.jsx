import React from 'react'
import CardList from '../../components/CardList/CardList'

const Main = (props) => {
  const {beers} = props;
  return (
    <div>
      Main
      <CardList beers={beers}/>
    </div>
    
  )
}

export default Main