import React from 'react'
import { Plus } from '../icons/svgIcon'

function FilterBtn(props) {
  return (
   <div {...props} className="flex-items box bg-dark flex flex-between"><p>{props.name}</p>
   <Plus/></div>
  )
}

export default FilterBtn