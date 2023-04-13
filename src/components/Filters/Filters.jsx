import React from 'react'

const Filters = (props) => {
    const {handleAbvHigh, checkedAbv, handlePhHigh, checkedPh} = props;

  return (
    <div>
      <label>
        High ABV (+6.0%)
        <input type="checkbox" checkedAbv={checkedAbv} onChange={handleAbvHigh}/>
      </label>
      <label>
        High Ph (Less than 4)
        <input type="checkbox" checkedPh={checkedPh} onChange={handlePhHigh}/>
      </label>
    </div>
  )
}

export default Filters