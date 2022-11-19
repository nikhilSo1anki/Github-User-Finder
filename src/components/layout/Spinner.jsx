import React from 'react'
import SpinnerLoader from './loader.gif'

function Spinner() {
  return (
    <div className="w-100 mt-20">
        <img width={70} className="text-center mx-auto" src={SpinnerLoader} alt="loading" />
    </div>
  )
}

export default Spinner
