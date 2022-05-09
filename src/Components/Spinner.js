import React, { Component } from 'react'
import tenor from '../tenor.gif'
const Spinner = ()=>{
    return (
      <div className="text-center">
        <img className="my-3" src={tenor} alt="loading" style={{height: '50px'}}/>
      </div>
    )
}

export default Spinner
