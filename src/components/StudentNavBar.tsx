import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHouse, faGear } from '@fortawesome/free-solid-svg-icons'

import nav from '../assets/navbar.png'
import home from '../assets/home.png'

function NavBar() {

  // const onClickPrev = () => {
  //   window.location.href="/"
  // }

  return (
    <div className="navbar flex items-center justify-between tracking-tight fixed bg-[#f2fafd] shadow-lg rounded-b-4xl h-[60px] w-screen mb-12 z-10">
      
      <div className="front-menu flex items-center">
        <img className="h-[60px]" src={ nav } alt="" />

        <div className="first fixed flex items-center justify-center">
          <Link className='z-10' to="/">
            <button className="prev transition duration-100 active:scale-90 bg-[#456399] rounded-full w-[70px] h-[70px] m-10 mt-[85px] transition duration-300 hover:opacity-70">
              <FontAwesomeIcon className='text-5xl text-white' icon={faArrowLeft} />
            </button>
          </Link>

          <div className="title text-[#2c4663] tracking-tight text-4xl border-b-4 h-[47px] -ml-12 mt-3 pl-8 border-[#ffe03d]">학생 관리</div>
          <button className="help transition duration-100 active:scale-90 text-white bg-[#2a4566] font-bold text-xl w-8 h-8 ml-2 mt-1 rounded-md transition duration-300 hover:opacity-70">?</button>
        </div>

      </div>
 
      <div className="back-menu flex items-center justify-end">

      <div className="sub-line bg-neutral-300 w-[2px] h-[26px] rotate-[12deg] mr-5"></div>

        <button className="setting-btn mt-1 mr-5">
          <FontAwesomeIcon className='text-4xl text-[#436299] transition duration-100 active:scale-90' icon={faGear} />
        </button>

        <div className="sub-line bg-neutral-300 w-[2px] h-[26px] rotate-[12deg] mr-5"></div>

        <Link to="/">
          <button className="home-btn mt-1 mr-8">
            <FontAwesomeIcon className='text-4xl text-[#436299] transition duration-100 active:scale-90' icon={faHouse} />
          </button>
        </Link>

      </div>      
      
    </div>
  )
}

export default NavBar