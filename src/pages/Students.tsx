import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

import NavBar from '../components/StudentNavBar'

import Window_bg from "../assets/window_bg.png"
import student_icon from "../assets/students.png"

function Students() {

  return (
    <div className="pick-up bg-cover font-molu-bold overflow-x-hidden">

      <NavBar />

      <div className='w-screen h-screen fixed flex justify-center items-end'>
        <div className="contain w-[92%] h-[87%] bg-[#65A0C2] rounded-t-md flex flex-col justify-center items-center">
          <div className="title w-full h-[85px] bg-[#85BAD3] flex items-center pl-10 rounded-t-md">
            <img className='w-13' src={ student_icon }></img>
            <div className="border-text font-molu-bold text-4xl ml-4 text-[#334155]">학생 리스트</div>
          </div>

          <div className="cards w-[98%] h-[90%] bg-[#F2FEFF] rounded-t-md mt-4 ">

          </div>
        </div>
      </div>


      <img className='w-screen h-screen fixed -z-20' src={ Window_bg } alt="" />

    </div>
  )
}

export default Students