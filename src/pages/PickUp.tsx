import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../components/NavBar'

// import Atsuko_bg from "../assets/atsuko.png"
import Sub_bg from "../assets/sub_bg.png"
import Btn_10P from "../assets/10p2.png"
import Btn_1P from "../assets/1p.png"
import Point_200 from "../assets/200p.png"
import PointBack from "../assets/point-back.png"
import SelectBtn from "../assets/select_student.png"

import connected_sky from "./connected_sky.wav"
import Atsuko_PV from "./atsuko_bg.mp4"
import Act10 from "./act10.mp4"

function PickUp() {
  // const [isMusic, setIsMusic] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const [is10P, setIs10P] = useState(false)
  const [is1P, setIs1P] = useState(false)

  // const onMusic = () => {
  //   setIsMusic(true)
  // }

  const onClick = () => {
    setIsClick(true)
  }

  const onClick10P = () => {
    // window.location.href="/gacha"
    setIs10P(true)

    setTimeout(()=>{ setIs10P(false) }, 18000);
  }

  const onClick1P = () => {
    // window.location.href="/gacha"
    setIs1P(true)

  }

  return (
    <div className="pick-up bg-cover font-molu-bold overflow-x-hidden">

      <NavBar name="학생 모집" />

      <img className='w-screen h-screen fixed -z-20' src={ Sub_bg } alt="" />

      {/* Gacha Act */}
      { is10P == true || is1P == true ?
        <video className="h-screen w-screen object-cover z-50 fixed" autoPlay>
          <source src={ Act10 } type="video/mp4" />
        </video>
        : null }

      <audio loop autoPlay>
        <source src={ connected_sky } type="audio/wav" />
      </audio>
      
      <video className="h-screen w-screen object-cover -z-10 fixed" muted autoPlay loop>
        <source src={ Atsuko_PV } type="video/mp4" />
      </video>

      {/* Pick Up Window */}
      { is10P == false ?
        <div className="flex justify-end items-center w-screen h-screen text-[#383f46]">
          <div className="window-bg fixed z-20 w-[680px] h-[580px] bg-[#a9e0f5] rounded-md shadow-md mr-36 mt-[50px]">
            <div className="pt-3 pb-3 flex justify-center items-center w-[170px] m-[8px] bg-[#f1fbfc] rounded-t-md font-molu text-[23px]">픽업 모집</div>
            
            <div className="info w-[680px] h-[445px] -mt-[12px] bg-[#f1fbfc]">
              <div className="date font-molu text-[23px] pb-6 pt-4 pl-8">2023/01/17 점검 후 ~ 2023/01/31 12:00까지</div>

              <div className="sub-line w-[620px] h-[2px] bg-[#ccd5d9] ml-8 -mt-6"></div>

              <div className="pickup-text text-[#285986] text-[53px] ml-8 mt-2 mb-1">픽업 모집!</div>

              <div className="sub-line w-[620px] h-[2px] bg-[#ccd5d9] ml-8"></div>

              <div className="up-text font-molu text-[23px] ml-8 mt-2 mb-1 text-[#107be3]">아츠코(★3) / 아즈사(★3) 출현 확률 UP!</div>
            
              <div className="sub-line w-[620px] h-[2px] bg-[#ccd5d9] ml-8"></div>

              <div className="sub-notice pl-8 p-2">
                <div className="sub-notice-text font-molu text-[21px] text-[#24405d]">10회 모집 시, ★2 이상 학생 1명 확정!</div>
                <div className="sub-notice-text font-molu text-[21px] text-[#24405d] -mt-1">※ 이미 모집한 학생은 엘리그마와 해당 학생의 엘레프로 변환됩니다.</div>
              </div>

              {/* Gacha Btn */}
              <div className="btns flex justify-center items-center mt-12">

                {/* 1회 */}
                <button className='m-1 transition duration-100 active:scale-90' onClick={ onClick1P }>
                  <img className="w-[300px] h-[101px]" src={ Btn_1P } alt="" />
                </button>

                {/* 10회 */}
                <button className='m-1 transition duration-100 active:scale-90' onClick={ onClick10P }>
                  <img className="w-[318px] " src={ Btn_10P } alt="" />
                </button>
                {/* <Link to="/d10">
                </Link> */}
              </div>
  
            </div>

            <div className="under w-[680px] h-[70px] flex items-center justify-center mt-1">
              <img className="w-[255px] saturate-150 mr-12" src={ Point_200 } />
              <div className='point flex justify-center'>
                <img className='h-[47px] -mt-2 saturate-150 ml-2 absolute' src={ PointBack } />
                <div className="point-text text-[#fdfdff] font-molu-bold ml-2 z-10 text-3xl">30</div>
              </div>

              <button className='ml-[70px] transition duration-100 active:scale-90'>
                  <img className="h-[56px] -mt-[5px]" src={ SelectBtn } alt="" />
                </button>
            </div>

          </div>
        </div>
        : null }

    </div>
  )
}

export default PickUp