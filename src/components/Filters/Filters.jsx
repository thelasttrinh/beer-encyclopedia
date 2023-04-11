import React from 'react'

const Filters = (props) => {
    const {handleAbvHigh, checked} = props;

  return (
    <div>
      <label class="container">
        High ABV (+6.0%)
        <input type="checkbox" checked={checked} onChange={handleAbvHigh}/>
      </label>
    </div>
  )
}

export default Filters