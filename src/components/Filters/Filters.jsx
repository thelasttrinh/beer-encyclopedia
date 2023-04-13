import React from 'react'

const Filters = (props) => {
  const { handleAbvHigh, checkedAbv, handlePhHigh, checkedPh, checkedClassic, handleClassic } = props;

  return (
    <div className='beers_Navbar--filters'>
      <label>
        High ABV (+6.0%)
      </label>
      <input type="checkbox" checkedAbv={checkedAbv} onChange={handleAbvHigh} />
      <label>
        High Ph (Less than 4) 
      </label>
      <input type="checkbox" checkedPh={checkedPh} onChange={handlePhHigh} />
      <label>
        Classic (Brewed before 2010)
      </label>
      <input type="checkbox" onChange={handleClassic} checkedClassic={checkedClassic} />
    </div>
  )
}

export default Filters