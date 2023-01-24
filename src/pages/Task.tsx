import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../components/NavBar'

import AronaRoom from '../assets/BG_AronaRoom.jpg'
import Sub_bg from "../assets/sub_bg.png"
import Load from '../assets/Load.png'
import AreaBtn from '../assets/tasks/area_btn.png'
import StoryBtn from '../assets/tasks/story_btn.png'
// import HyeonsangBtn from '../assets/tasks/hyeonsang.png'
import SmallBtns from '../assets/tasks/small_btns.png'
import AronaRoomIn from '../assets/BG_AronaRoom_In.jpg'
import AronaChat from '../assets/tasks/chat.png'

import DailyRoutine247 from './DailyRoutine247.wav'
import VOC_BerryMilk from './berrymilk.mp3'

import BG_Arona from './TaskBG_Arona.mp4'

function Task() {
  const [isLoad, setIsLoad] = useState(true)
  const [isChat, setIsChat] = useState(false)
  const [AronaVOC, setAronaVOC] = useState(0)

  useEffect(() => {
    setTimeout(() => { setIsLoad(false) }, 2500)
    setTimeout(() => { setIsChat(true) }, 4500)
  }, [])

  // setInterval(() => { 
  //   let t = AronaVOC
  //   setAronaVOC(t + 1)
  //   // setIsChat(true)
  // }, 5000)

  return (
    <div className="pick-up bg-cover font-molu-bold overflow-x-hidden">

      { isLoad ? <img className='load z-50 w-screen h-screen fixed object-cover' src={Load} /> : null }

      { isChat ? 
        <audio autoPlay onEnded={() => { setIsChat(false); setTimeout(() => { setIsChat(true) }, 10000) } }>
          <source src={ VOC_BerryMilk } type="audio/wav" />
        </audio> : null }

      <div className="h-screen flex items-end pb-[4rem] pl-[10.5rem] fixed">
        <img className={ isChat ? "transition duration-1000 opacity-100 w-[600px] shadow-md" : "shadow-md w-[600px] transition duration-1000 opacity-0" } src={AronaChat} />
      </div>

      <audio loop autoPlay>
        <source src={ DailyRoutine247 } type="audio/wav" />
      </audio>

      <NavBar name="업무" />

      <div className="btns fixed w-screen h-screen flex flex-col justify-center items-end mt-[60px] pr-[80px]">
        <div className="line flex justify-center items-center">
          <img className='w-[450px] cursor-pointer transition duration-100 active:scale-90' src={AreaBtn} />
          <img className='w-[450px] cursor-pointer transition duration-100 active:scale-90 -ml-16' src={StoryBtn} />
        </div>
        <img className='w-[840px] mr-[63px] cursor-pointer' src={SmallBtns} />
      </div>

      <img className='fixed -z-10 h-screen w-screen overflow-visible object-cover mt-6' src={ AronaRoomIn } alt="" />
      {/* <video className="h-screen w-screen object-cover overflow-auto -z-10 fixed" muted autoPlay loop>
        <source src={ BG_Arona } type="video/mp4" />
      </video> */}
      <img className='w-screen h-screen fixed -z-20' src={ Sub_bg } alt="" />

    </div>
  )
}

export default Task