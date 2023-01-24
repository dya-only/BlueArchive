import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHouse, faGear } from '@fortawesome/free-solid-svg-icons'

import NavBar from '../components/StudentNavBar'
import InfoNavBar from '../components/InfoNavBar'

import Window_bg from "../assets/window_bg.png"
import student_icon from "../assets/students.png"
import AbydosBG from "../assets/BG_Abydos_Collection.png"
import MillenniumBG from "../assets/BG_Millennium_Collection.png"
import TrinityBG from "../assets/BG_Trinity_Collection.png"
import GehennaBG from "../assets/BG_Gehenna_Collection.png"
import AriusBG from "../assets/BG_Arius_Collection.png"
import HyakkiyakoBG from "../assets/BG_Hyakkiyako_Collection.png"
import ValkyrieBG from "../assets/BG_Valkyrie_Collection.png"
import nav from '../assets/navbar.png'
import home from '../assets/home.png'
import InfoTitle from "../assets/info_window.png"

import Future_Bossa from "./FutureBossa.wav"

function Students() {
  const [studentInfo, setStudentInfo] = useState("")
  const [infoPage, setInfoPage] = useState(false)
  const Characters = [{"name": "노노미", "text": "즐거운 하루 되세요!", "school": "Abydos", "profile": "https://static.miraheze.org/bluearchivewiki/a/ad/Nonomi.png", "artwork": "https://static.miraheze.org/bluearchivewiki/3/3f/Nonomi_full.png"}
    , {"name": "노노미(수영복)", "text": " ", "school": "Abydos", "profile": "https://static.miraheze.org/bluearchivewiki/9/98/Nonomi_%28Swimsuit%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/0/01/Nonomi_%28Swimsuit%29_full.png"}
    , {"name": "마리", "text": "늘 평안하세요", "school": "Trinity", "profile": "https://static.miraheze.org/bluearchivewiki/4/4f/Mari.png", "artwork": "https://static.miraheze.org/bluearchivewiki/8/8f/Mari_full.png"}
    , {"name": "마리(체육복)", "text": "평화로운 축제가 되기를 기원합니다", "school": "Trinity", "profile": "https://static.miraheze.org/bluearchivewiki/8/88/Mari_%28Sportswear%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/7/73/Mari_%28Sportswear%29_full.png"}
    , {"name": "마키", "text": "그래피티, 너무 좋아!", "school": "Millennium", "profile": "https://static.miraheze.org/bluearchivewiki/2/21/Maki.png", "artwork": "https://static.miraheze.org/bluearchivewiki/2/2e/Maki_full.png"}
    , {"name": "모모이", "text": "게임 외길 인생", "school": "Millennium", "profile": "https://static.miraheze.org/bluearchivewiki/1/18/Momoi.png", "artwork": "https://static.miraheze.org/bluearchivewiki/d/dd/Momoi_full.png"}
    , {"name": "무츠키", "text": "심심해~", "school": "Gehenna", "profile": "https://static.miraheze.org/bluearchivewiki/0/0b/Mutsuki.png", "artwork": "https://static.miraheze.org/bluearchivewiki/c/c8/Mutsuki_full.png"}
    , {"name": "무츠키(새해)", "text": "올해는 더 재밌을 거야~!", "school": "Gehenna", "profile": "https://static.miraheze.org/bluearchivewiki/c/c2/Mutsuki_%28New_Year%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/b/b2/Mutsuki_%28New_Year%29_full.png"}
    , {"name": "미도리", "text": "재미있는 게임 추천받아요.", "school": "Millennium", "profile": "https://static.miraheze.org/bluearchivewiki/e/ee/Midori.png", "artwork": "https://static.miraheze.org/bluearchivewiki/5/5e/Midori_full.png"}
    , {"name": "미유", "text": "좋은 날은 이제 다 끝이에요……", "school": "SRT", "profile": "https://static.miraheze.org/bluearchivewiki/a/ac/Miyu.png", "artwork": "https://static.miraheze.org/bluearchivewiki/b/b8/Miyu_full.png"}
    , {"name": "사야", "text": "나님을 칭찬해라!", "school": "Shanhaijing", "profile": "https://static.miraheze.org/bluearchivewiki/c/ce/Saya.png", "artwork": "https://static.miraheze.org/bluearchivewiki/a/a1/Saya_full.png"}
    , {"name": "사야(사복)", "text": "나님은 뭐든지 알고 있다고!", "school": "Shanhaijing", "profile": "https://static.miraheze.org/bluearchivewiki/e/e2/Saya_%28Casual%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/0/06/Saya_%28Casual%29_full.png"}
    , {"name": "사키", "text": "말보다 행동으로", "school": "SRT", "profile": "https://static.miraheze.org/bluearchivewiki/d/d0/Saki.png", "artwork": "https://static.miraheze.org/bluearchivewiki/1/19/Saki_full.png"}
    , {"name": "세리나", "text": "몸이 아프면 언제든 연락주세요", "school": "Trinity", "profile": "https://static.miraheze.org/bluearchivewiki/4/41/Serina.png", "artwork": "https://static.miraheze.org/bluearchivewiki/b/b8/Serina_full.png"}
    , {"name": "세리나(크리스마스)", "text": "크리스마스를 맞아, 행복을 모두에게.", "school": "Trinity", "profile": "https://static.miraheze.org/bluearchivewiki/1/19/Serina_%28Christmas%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/7/74/Serina_%28Christmas%29_full.png"}
    , {"name": "세리카", "text": "대책위원회 쿠로미 세리카입니다", "school": "Abydos", "profile": "https://static.miraheze.org/bluearchivewiki/c/c8/Serika.png", "artwork": "https://static.miraheze.org/bluearchivewiki/c/c0/Serika_full.png"}
    , {"name": "세리카(새해)", "text": "모두 새해 복 많이 받으세요", "school": "Abydos", "profile": "https://static.miraheze.org/bluearchivewiki/6/61/Serika_%28New_Year%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/0/01/Serika_%28New_Year%29_full.png"}
    , {"name": "슌", "text": "천사들과 함께하는 삶", "school": "Shanhaijing", "profile": "https://static.miraheze.org/bluearchivewiki/1/17/Shun.png", "artwork": "https://static.miraheze.org/bluearchivewiki/4/4f/Shun_full.png"}
    , {"name": "슌(어린이)", "text": "탕후루가 먹고 싶네요~", "school": "Shanhaijing", "profile": "https://static.miraheze.org/bluearchivewiki/5/53/Shun_%28Kid%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/2/25/Shun_%28Kid%29_full.png"}
    , {"name": "스즈미", "text": "오늘도 평안한 하루를", "school": "Trinity", "profile": "https://static.miraheze.org/bluearchivewiki/0/07/Suzumi.png", "artwork": "https://static.miraheze.org/bluearchivewiki/d/d5/Suzumi_full.png"}
    , {"name": "시미코", "text": "책은 대출기간 내에 반납해주세요", "school": "Trinity", "profile": "https://static.miraheze.org/bluearchivewiki/f/f4/Shimiko.png", "artwork": "https://static.miraheze.org/bluearchivewiki/9/93/Shimiko_full.png"}
    , {"name": "시즈코", "text": "백야당 절찬 영업중!", "school": "Hyakkiyako", "profile": "https://static.miraheze.org/bluearchivewiki/7/77/Shizuko.png", "artwork": "https://static.miraheze.org/bluearchivewiki/e/e3/Shizuko_full.png"}
    , {"name": "아리스", "text": "밀레니엄 게임개발부 아리스입니다.", "school": "Millennium", "profile": "https://static.miraheze.org/bluearchivewiki/0/0f/Arisu.png", "artwork": "https://static.miraheze.org/bluearchivewiki/2/26/Arisu_full.png"}
    , {"name": "아스나", "text": "최고의 봉사를 당신에게!", "school": "Millennium", "profile": "https://static.miraheze.org/bluearchivewiki/9/9f/Asuna.png", "artwork": "https://static.miraheze.org/bluearchivewiki/c/c7/Asuna_full.png"}
    , {"name": "아스나(바니걸)", "text": "최고의 즐거움을 당신에게!", "school": "Millennium", "profile": "https://static.miraheze.org/bluearchivewiki/a/a4/Asuna_%28Bunny_Girl%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/3/35/Asuna_%28Bunny_Girl%29_full.png"}
    , {"name": "아야네", "text": "상식이 존중받는 동아리, 대책위원회입니다", "school": "Abydos", "profile": "https://static.miraheze.org/bluearchivewiki/a/a7/Ayane.png", "artwork": "https://static.miraheze.org/bluearchivewiki/3/3f/Ayane_full.png"}
    , {"name": "아야네(수영복)", "text": " ", "school": "Abydos", "profile": "https://static.miraheze.org/bluearchivewiki/f/f6/Ayane_%28Swimsuit%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/7/7f/Ayane_%28Swimsuit%29_full.png"}
    , {"name": "아이리", "text": "민트초코는 정말 최고야!", "school": "Trinity", "profile": "https://static.miraheze.org/bluearchivewiki/9/96/Airi.png", "artwork": "https://static.miraheze.org/bluearchivewiki/4/4b/Airi_full.png"}
    , {"name": "아즈사", "text": "et omnia vanitas", "school": "Trinity", "profile": "https://static.miraheze.org/bluearchivewiki/8/86/Azusa.png", "artwork": "https://static.miraheze.org/bluearchivewiki/0/06/Azusa_full.png"}
    , {"name": "아즈사(수영복)", "text": "A brevis paradisum", "school": "Trinity", "profile": "https://static.miraheze.org/bluearchivewiki/a/a4/Azusa_%28Swimsuit%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/2/2e/Azusa_%28Swimsuit%29_full.png"}
    , {"name": "아츠코", "text": "요즘은 꽃말을 배우고 있는 중", "school": "Arius", "profile": "https://static.miraheze.org/bluearchivewiki/c/c7/Atsuko.png", "artwork": "https://static.miraheze.org/bluearchivewiki/f/fc/Atsuko_full.png"}
    , {"name": "아카네", "text": "따뜻한 홍차 한 잔의 여유", "school": "Millennium", "profile": "https://static.miraheze.org/bluearchivewiki/a/aa/Akane.png", "artwork": "https://static.miraheze.org/bluearchivewiki/c/cf/Akane_full.png"}
    , {"name": "아카네(바니걸)", "text": "", "school": "Millennium", "profile": "https://static.miraheze.org/bluearchivewiki/9/99/Akane_%28Bunny_Girl%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/d/d3/Akane_%28Bunny_Girl%29_full.png"}]

  const SelectStudent = (name: string) => {
    setStudentInfo(String(name))
    setInfoPage(true)
  }

  return (
    <div className="pick-up bg-cover font-molu-bold overflow-x-hidden">

      <audio loop autoPlay>
        <source src={ Future_Bossa } type="audio/wav" />
      </audio>

      <NavBar name="학생 관리" />

      { infoPage == true ?
        <div className="navbar z-30 flex items-center justify-between tracking-tight fixed bg-[#f2fafd] shadow-lg rounded-b-4xl h-[60px] w-screen mb-12">
          <div className="front-menu flex items-center">
            <img className="h-[60px]" src={ nav } alt="" />
    
            <div className="first fixed flex items-center justify-center">
              <button className="prev z-10 transition duration-100 active:scale-90 bg-[#456399] rounded-full w-[70px] h-[70px] m-10 mt-[85px] transition duration-300 hover:opacity-70" onClick={ ()=>setInfoPage(false) }>
                <FontAwesomeIcon className='text-5xl text-white' icon={faArrowLeft} />
              </button>
    
              <div className="title text-[#2c4663] tracking-tight text-4xl border-b-4 h-[47px] -ml-12 mt-3 pl-8 border-[#ffe03d]">학생</div>
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
       : null }

      { infoPage == true ?
        <div className="info z-20 w-screen h-screen fixed flex justify-center items-center">
          { Characters[Characters.findIndex(e => e.name == studentInfo)].school == "Abydos" ?
            <img className='bg absolute w-screen h-screen' src={ AbydosBG } />
           : null }
          { Characters[Characters.findIndex(e => e.name == studentInfo)].school == "Millennium" ?
            <img className='bg absolute w-screen h-screen' src={ MillenniumBG } />
           : null }
          { Characters[Characters.findIndex(e => e.name == studentInfo)].school == "Arius" ?
            <img className='bg absolute w-screen h-screen' src={ AriusBG } />
           : null }
           { Characters[Characters.findIndex(e => e.name == studentInfo)].school == "Trinity" ?
            <img className='bg absolute w-screen h-screen' src={ TrinityBG } />
           : null }
           { Characters[Characters.findIndex(e => e.name == studentInfo)].school == "Gehenna" ?
            <img className='bg absolute w-screen h-screen' src={ GehennaBG } />
           : null }
           { Characters[Characters.findIndex(e => e.name == studentInfo)].school == "Hyakkiyako" ?
            <img className='bg absolute w-screen h-screen' src={ HyakkiyakoBG } />
           : null }

          <div className="w-screen flex justify-start ml-[13rem]">
            <div className="character w-[300px] h-screen z-20 flex justify-center relative left-[5%] mt-[200px]">
              <img className='h-[130%] object-cover overflow-visible' src={ Characters[Characters.findIndex(e => e.name == studentInfo)].artwork } />
            </div>
          </div>
          <div className="z-30 w-screen h-screen flex justify-start items-end fixed">
            <img className='w-[600px] mb-[30px] ml-[40px]' src={ InfoTitle } />
            <div className="info-name font-molu-bold text-white text-[40px] z-30 w-[600px] mb-[194px] ml-[180px] fixed">{ Characters[Characters.findIndex(e => e.name == studentInfo)].name }</div>
          </div>
        </div>
       : null }

      <div className='w-screen h-screen fixed flex justify-center items-end'>
        <div className="contain w-[86%] h-[88%] bg-[#65A0C2] rounded-t-md flex flex-col justify-center items-center border-2 border-[#78abc4]">
          <div className="title w-full h-[80px] mt-2 bg-[#85BAD3] flex items-center pl-10 rounded-t-md pt-1 pb-1">
            <img className='w-13' src={ student_icon }></img>
            <div className="border-text font-molu-bold text-4xl ml-4 text-[#334155]">학생 리스트</div>
          </div>

          <div className="cards w-[98%] h-[90%] bg-[#F2FEFF] rounded-t-lg mt-4 flex justify-center">
            <div className="cards-in w-[98.6%] h-[100%] bg-[#F2FEFF] rounded-t-lg mt-3 border-2 border-[#c0cece] flex justify-center items-center overflow-y-auto flex-wrap">
              { Characters.map((i) => {
                return ( 
                  <button className="chat-one w-68 hover:bg-[#dce5ec] flex justify-start items-center flex-col mt-10" onClick={ () => { SelectStudent(i.name) } }>
                    <img className='w-[246px] h-[272px] object-cover ml-4 p-2 border-[1px] border-neutral-300 rounded-lg' src={ i.profile } />
                    <div className="name font-molu-bold text-2xl text-[#737a80] mt-2">{ i.name }</div>
                  </button>
                )
              }) }
            </div>
          </div>
        </div>
      </div>


      <img className='w-screen h-screen fixed -z-20' src={ Window_bg } alt="" />

    </div>
  )
}

export default Students