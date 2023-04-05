import React from 'react'
import Main from "./containers/Main/Main";
import NavBar from './containers/NavBar/NavBar';

const App = () => {
  return (
    <div>
      <h1>Beer Encyclopedia</h1>
      <NavBar/>
      <Main/>
    </div>
  )
}

export default App