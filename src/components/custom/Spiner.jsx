import React from 'react'
import '../../styles/custom.css'
function Spiner({type='X'}) {
  return (
    <span className={"loader"+type} >

    </span>
  )
}

export default Spiner
