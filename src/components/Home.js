import React from 'react'
import img1 from './background.avif'

function Home() {
  return (
    <div className='container' style={{marginTop:'140px'}}>
        <div className='d-flex justify-content-center mb-5'>
        <i  className="fa-solid fa-people-roof fa-2xl" style={{color:'black', fontSize:'80px'}}></i>
        </div>
        <h2 className='text-center bg-dark text-light py-3 rounded-3'>Employee Management</h2>
            <img className='' src={img1} alt='background' style={{width:'100%',}}></img>
    </div>
  )
}

export default Home