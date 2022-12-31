import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faEnvelope,  } from '@fortawesome/free-solid-svg-icons'

// import NavBar from '../components/NavBar'
import LobbyNavBar from '../components/LobbyNavBar'
import TaskBar from '../components/TaskBar'

import Sub_bg from "../assets/sub_bg.png"
import ProfileBar from "../assets/profile_bar.png"
import Notice from "../assets/notice.png"
import MomoTalk from "../assets/momo.png"
import Quest from "../assets/quest.png"
import PyroxeneStore from "../assets/buy_blue.png"
import home from '../assets/home.png'
import menubar from '../assets/menu_bar.png'
import profileBtn from '../assets/memorial_btn.png'
import settBtn from '../assets/sett_btn.png'
import BlueItemMenu from '../assets/blue_item_menu.png'
import CoinItemMenu from '../assets/coin_item_menu.png'
import ApItemMenu from '../assets/ap_item_menu.png'
import plus from '../assets/plus.png'
import yuuka_gym from "../assets/yuuka_gym.png"
import azusa_mizugi from "../assets/azusa_mizugi.png"
import hoshino_mizugi from "../assets/hoshino_mizugi.png"
import momo_logo from "../assets/momo_logo.png"
import talk_logo from "../assets/talk_logo.png"
import momo_latest_btn from "../assets/momo_latest_btn.png"
import momo_down_btn from "../assets/momo_down_btn.png"
import yuuka_story_btn from "../assets/yuuka_story_btn.png"
import yuuka_profile from "../assets/yuuka_profile.png"

import Yuuka_Memorial from "./midsummer_cat_yuuka_gym.mp4"
import Azusa_Memorial from "./luminous_memory_azusa_mizugi.mp4"
import Hoshino_Memorial from "./theme120_hoshino_mizugi.mp4"
import YuukaStory1 from "./YuukaStory1.mp4"
// import YuukaStory2 from "./YuukaStory2.mp4"

import LuminousMemory from "./luminous_memory.mp3"
import MidSummerCat from "./midsummer_cat.mp3"
import Theme120 from "./theme_120.mp3"

function Main() {
  const [memorial, setMemorial] = useState("")
  const [isMusic, setIsMusic] = useState(false)
  const [isSelectingMemorial, setIsSelectingMemorial] = useState(false)
  const [expProgress, setExpProgress] = useState(0)
  const [maxExp, setMaxExp] = useState(0)
  const [isMomoTalk, setIsMomoTalk] = useState(false)
  const [whoChat, setWhoChat] = useState("")
  const [isYuukaStory, setIsYuukaStory] = useState(0)
  
  const Characters = ["Yuuka", "Azusa", "Hoshino"]

  const Yuuka_Chats = ["안녕하세요, 선생님. 유우카입니다.", "저 기억하고 계시죠?", "*아아. 당연하지.", "뭐, 그럼 다행이구요.", "선생님의 연락처를 받아두길 잘했네요.", "모모톡으로 연락드린 건 다름이 아니라······.", "지난번 샬레 탈환 당시 사용했던 탄환의 경비 처리가 늦어지고 있어서요.", "경비는 언제쯤 청구받을 수 있을까요?", "*이쪽에서 처리해야 하는 거였어······?", "물론이죠. 탄환도 공짜는 아니니까요.", "청구서를 작성해서 보내주시면 총학생회에서", "대신 잔금을 치러줄 거에요.", "청구서 양식이라면 밀레니엄 학원에서 쓰는 것이 있어요.", "다음에 샬레를 방문할 때 가져다드릴게요.", "*도와줘서 고마워.", "어려운 일도 아닌걸요.", "그럼 좋은 하루 되세요.", "&"]

  const StyledProgressBar = styled.div` width: ${ Math.floor(expProgress / maxExp * 100) }%; height: 5px; background-color: #59eefb`

  const onMusic = () => {
    setIsMusic(true)
    sessionStorage.setItem("isPlaying", "true")
  }

  const onClickQuit = () => {
    setIsSelectingMemorial(false)
  }

  const onClickMemorial = () => {
    setIsSelectingMemorial(true)
  }

  const SelectMemorial = (name: String) => {
    setMemorial(String(name))
  }

  const SelectChat = (name: String) => {
    setWhoChat(String(name))
  }

  const onClickQuitMomo = () => {
    setIsMomoTalk(false)
    setWhoChat("")
  }

  const onClickMomo = () => {
    setIsMomoTalk(true)
  }

  const onYuukaStory = () => {
    onClickQuitMomo()
    setIsYuukaStory(1)
    setTimeout(()=>{ setIsYuukaStory(0) }, 74700)
    // setTimeout(()=>{ setIsYuukaStory(0); localStorage.setItem("YuukaStoryProgress", String(parseInt(JSON.parse(localStorage.getItem("YuukaStoryProgress") || '{}')) + 1)) }, 226800);
  }
  
  useEffect(() => {

    setMaxExp(1000)
    setExpProgress(612)

    if (sessionStorage.getItem("isPlaying") == "true") {
      setIsMusic(true)
    } else {
      setIsMusic(false)
    }

    // let rand = Math.floor(Math.random() * 2)
    let rand = 0

    setMemorial(Characters[rand])

    if (localStorage.getItem("YuukaStoryProgress") == null) localStorage.setItem("YuukaStoryProgress", "0")
    console.log(localStorage.getItem("YuukaStoryProgress"))
  }, [])
  
  return (
    <div className="main bg-cover font-molu-bold overflow-x-hidden">

      {/* Music Button */}
      { JSON.parse(isMusic.toString()) == false ?
        <div className="absolute w-full h-full backdrop-brightness-[0.2] flex items-center justify-center z-50 drop-shadow-2xl">
          <div className="flex flex-col justify-center items-center w-[400px] h-48 bg-white rounded-2xl">
            <div className="font-molu text-xl mb-8">사운드 재생을 위해 확인 버튼을 눌러주세요.<br/>※전체화면을 사용해주세요.</div>
            <button className='music-btn bg-[#456399] font-molu transition duration-100 active:scale-90 text-white p-3 w-[80px] drop-shadow-2xl flex justify-center items-center drop-shadow-xl rounded-lg' onClick={onMusic}>확인</button>
          </div>
        </div>
       : null }

      {/* Select Memorial  */}
      { isSelectingMemorial == true ?
        <div className="fixed w-full h-full backdrop-brightness-[0.8] flex items-center justify-center z-50 drop-shadow-2xl">
          <div className=" flex flex-col justify-center w-[650px] h-[400px] bg-white rounded-2xl">
            <button className="quit z-20 -mt-[349px] fixed w-[600px] flex justify-end ml-9 transition duration-100 active:scale-[99%] cursor-pointer" onClick={ onClickQuit }>
              <FontAwesomeIcon className='text-5xl text-[#2c4663]' icon={faXmark} />
            </button>
            <div className="fixed title flex pt-[30px] justify-center flex-col -mt-[370px]">
              <div className='flex justify-center'>
                <div className="font-molu-bold text-3xl text-[#2c4663] w-[115px] border-b-[4px] border-[#ffe03d]">당번 선택</div>
                  <button className="help transition duration-100 active:scale-90 text-white bg-[#2a4566] font-bold text-xl w-8 h-8 ml-2 rounded-md transition duration-300 hover:opacity-70">?</button>
                </div>
              <div className="border-b-[2px] border-gray-300 w-[650px]"></div>
            </div>
            <div className="cards flex justify-start items-start w-[650px] h-[250px]">
              <button className='m-4' onClick={ () => SelectMemorial("Yuuka") }>
                <img className='w-[150px] transition duration-100 active:scale-95 hover:scale-105' src={ yuuka_gym } />
                <div className='text-xl text-[#2c4663]'>유우카 (체육복)</div>
              </button>
              <button className='m-4' onClick={ () => SelectMemorial("Azusa") }>
                <img className='w-[150px] transition duration-100 active:scale-95 hover:scale-105' src={ azusa_mizugi } />
                <div className='text-xl text-[#2c4663]'>아즈사 (수영복)</div>
              </button>
              <button className='m-4' onClick={ () => SelectMemorial("Hoshino") }>
                <img className='w-[150px] transition duration-100 active:scale-95 hover:scale-105' src={ hoshino_mizugi } />
                <div className='text-xl text-[#2c4663]'>호시노 (수영복)</div>
              </button>
            </div>
            <div className="flex justify-center">
              <button className='music-btn bg-[#456399] font-molu transition duration-100 active:scale-90 text-white p-3 w-[80px] drop-shadow-2xl flex justify-center items-center drop-shadow-xl rounded-lg' onClick={onClickQuit}>확인</button>
            </div>  
          </div>
        </div>
       : null }

      {/* Yuuka Story Act 1 */}
      { isYuukaStory == 1 ?
        <video className="w-screen absolute z-30" autoPlay>
          <source src={ YuukaStory1 } type="video/mp4" />
        </video>
       : null }
      {/* Yuuka Story Act 1-2 */}
      {/* { isYuukaStory == 2 ?
        <video className="w-screen absolute z-30" autoPlay>
          <source src={ YuukaStory2 } type="video/mp4" />
        </video>
       : null } */}

      {/* MoMo Talk */}
      { isMomoTalk ?
      <div className="fixed w-full h-full backdrop-brightness-[0.8] flex items-center justify-center z-50 drop-shadow-2xl">
        <div className="flex flex-col justify-center items-center">
          <div className="window-title w-[1100px] h-[60px] bg-[#fa91a5] rounded-t-xl flex justify-between items-center">
            <div className='flex justify-center items-center'>
              <img className='w-13 ml-1' src={ momo_logo } />
              <div className="title text-white text-3xl font-molu-bold mt-1">MomoTalk</div>
            </div>
            <button className="quit mr-4 transition duration-100 active:scale-[99%] cursor-pointer" onClick={ onClickQuitMomo }>
              <FontAwesomeIcon className='text-5xl text-white' icon={faXmark} />
            </button>
          </div>
          <div className=" flex justify-start w-[1100px] h-[550px] bg-white rounded-b-xl">
            
            <div className="left-bar bg-[#4c5b70] w-[110px] h-[550px] [990px] rounded-bl-xl">
              <div className="square w-[110px] h-[105px] bg-[#647789] flex justify-center items-center">
                <img className='w-[55px]' src={ talk_logo } />
              </div>
            </div>

            <div className="chat-list w-[500px] h-[550px] bg-[#f3f7f8] border-r-[1px] border-zinc-200">
              <div className="top-bar w-[500px] h-[70px] flex items-center justify-around ml-2">
                <div className="text text-2xl font-molu-bold text-[#373a3d] pt-1">안 읽은 메시지(0)</div>
                <img className='h-[70px] mt-5 transition duration-100 active:scale-90 cursor-pointer' src={ momo_latest_btn } />
                <img className='h-[70px] -ml-10 mt-5 transition duration-100 active:scale-90 cursor-pointer' src={ momo_down_btn } />
              </div>
              <div className="line-contain w-[500px] flex justify-center">
                <div className="line w-[460px] h-[1.5px] bg-zinc-300"></div>
              </div>
              <div className="chats mt-2">

                <button className="chat-one w-[500px] h-[85px] hover:bg-[#dce5ec] flex justify-start items-center" onClick={ () => { SelectChat("Yuuka") } }>
                  <img className='rounded-full w-[68px] h-[68px] ml-4' src={ yuuka_profile } />
                  <div className="name-last ml-4 mt-[2px] flex flex-col items-start">
                    <div className="name font-molu-bold text-2xl text-[#373a3d]">유우카</div>
                    <div className="last font-molu-bold text-[22px] text-[#898c94] w-[350px] truncate flex">{ Yuuka_Chats[Yuuka_Chats.length-1] !== "&" ? Yuuka_Chats[Yuuka_Chats.length-1] : "유우카의 인연 스토리로" }</div>
                  </div>
                </button>

              </div>
            </div>
            <div className="chat-real w-[490px] h-[534px] rounded-br-xl bg-white pt-4 overflow-y-auto overflow-x-hidden">

              { whoChat == "Yuuka" ?
                <div className="w-[500px] h-[85px] flex justify-start items-center">
                  <img className='rounded-full w-[68px] h-[68px] ml-4' src={ yuuka_profile } />
                  <div className="name-last ml-4 mt-[2px]">
                    <div className="name font-molu-bold text-2xl text-[#373a3d]">유우카</div>
                  </div>
                </div>
               : null }

              { whoChat == "Yuuka" ?
                ( Yuuka_Chats.map((i) => {
                  if (i.split('')[0] == "*") {
                    return ( <div className='flex justify-end'>
                      <div className='one-chat p-2 m-2 max-w-[450px] bg-[#498bc7] rounded-xl text-white text-xl'>{ i.substring(1) }</div>
                    </div> )
                  } else if (i.split('')[0] == "&") {
                    return ( <button className='flex justify-end' onClick={ onYuukaStory }>
                      <img className='w-[400px] mr-4 cursor-pointer transition duration-100 active:scale-90' src={ yuuka_story_btn } />
                    </button> )
                  } else {
                    return( <div className='flex justify-start'>
                      <div className='one-chat p-2 m-2 max-w-[365px] bg-[#4c586d] rounded-xl text-white text-xl'>{ i }</div>
                    </div> )
                  }
                }) )
                 : null }
            </div>

          </div>
        </div>
      </div>
      : null }

      {/* Memorial Musics */}
      { isMusic == true && memorial == "Yuuka" && isYuukaStory == 0 ?
        <audio loop autoPlay>
          <source src={ MidSummerCat } type="audio/mp3" />
        </audio>
       : null }

      { isMusic == true && memorial == "Azusa" && isYuukaStory == 0 ?
        <audio loop autoPlay>
          <source src={ LuminousMemory } type="audio/mp3" />
        </audio>
       : null }

      { isMusic == true && memorial == "Hoshino" && isYuukaStory == 0 ?
        <audio loop autoPlay>
          <source src={ Theme120 } type="audio/mp3" />
        </audio>
       : null }

      {/* Memorial Acts */}
      { memorial == "Yuuka" ?
        <video className="object-none min-w-[2000px] overflow-auto fixed -ml-10 -mt-6 -z-10" muted autoPlay loop>
          <source src={ Yuuka_Memorial } type="video/mp4" />
        </video>
      : null }

      { memorial == "Azusa" ?
        <video className="w-screen overflow-none fixed m-0 -z-10" muted autoPlay loop>
          {/* w-screen overflow-none fixed m-0 -z-10 */}
          <source src={ Azusa_Memorial } type="video/mp4" />
        </video>
      : null }

      { memorial == "Hoshino" ?
        <video className="w-screen overflow-none fixed m-0 -z-10" muted autoPlay loop>
          {/* w-screen overflow-none fixed m-0 -z-10 */}
          <source src={ Hoshino_Memorial } type="video/mp4" />
        </video>
      : null }

      {/* <Link to="/pickup">
        <button className='btn bg-[#456399] font-molu transition duration-100 active:scale-90 text-white p-3 m-4 w-[80px] drop-shadow-2xl flex justify-center items-center drop-shadow-xl rounded-lg'>모집</button>
      </Link> */}

      {/* <LobbyNavBar /> */}
      <div className="lobby-navbar flex items-center justify-end fixed pr-[58px] mt-8 w-screen">

        <div className="items flex justify-center items-center mr-[50px]">

          <div className="item-menu flex justify-start items-center w-[200px] mr-2">
            <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[85%]' src={ ApItemMenu } />
            <div className="font-molu-bold text-[#16365c] text-[24px] mt-1 pl-[47px] tracking-tight flex justify-center">60/148</div>
          </div>

          <img className='w-6 h-6 fixed mr-[275px] cursor-pointer transition duration-100 active:scale-90' src={ plus } />

          <div className="item-menu flex justify-start items-center w-[200px] mr-2">
            <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[85%]' src={ CoinItemMenu } />
            <div className="font-molu-bold text-[#16365c] text-[24px] mt-1 pl-[55px] tracking-tight flex justify-center">4504918</div>
          </div>

          <div className="item-menu flex justify-start items-center w-[200px]">
            <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[85%]' src={ BlueItemMenu } />
            <div className="font-molu-bold text-[#16365c] text-[24px] mt-1 pl-[45px] tracking-tight flex justify-center">12402</div>
          </div>

          <img className='w-6 h-6 fixed ml-[555px] cursor-pointer transition duration-100 active:scale-90' src={ plus } />

        </div>

        <div className="menu flex justify-center items-center">
          <img className='absolute shadow-xl rounded-sm w-[240px] h-[45px] -z-10' src={ menubar } />

          <div className="flex items-center justify-center cursor-pointer">
            <img className='w-[33px] transition duration-100 active:scale-90' src={ profileBtn } onClick={ onClickMemorial } />

            <div className="sub-line bg-neutral-400 w-[1px] h-[21px] rotate-[12deg] mr-5 ml-5 rounded-2xl"></div>

            <FontAwesomeIcon className='text-[27px] text-[#426199] transition duration-100 active:scale-90 cursor-pointer' icon={ faEnvelope } />

            <div className="sub-line bg-neutral-400 w-[1px] h-[21px] rotate-[12deg] mr-5 ml-5 rounded-2xl"></div>

            <img className='w-[24px] transition duration-100 active:scale-90 cursor-pointer' src={ settBtn } />
          </div>
        </div>
      </div>

      <TaskBar />

      <div className="profile w-[320px] flex justify-center items-center mt-8 mb-[35px]">
        <img className='w-[350px] absolute -z-10 ml-7' src={ ProfileBar } />

        <div className="profile-text flex items-center ml-[100px]">
          <div className="lv mr-6 -ml-14">
            <div className="lv-text font-molu text-[30px] text-[#eee466] -mb-3 italic">Lv.</div>
            <div className="lv font-molu-bold text-5xl text-white italic -ml-3">45</div>
          </div>

          <div className="name">
            <div className="usrname font-molu-bold text-white text-[24px]">귀여운디아</div>
            <div className="exp-bar bg-[#3e4f61] h-[5px] w-[215px]">
              {/* <div className="exp-progress bg-[#59eefb] h-[5px] w-[60%]"></div> */}
              <StyledProgressBar></StyledProgressBar>
            </div>
            <div className="exp-text text-[#59eefb]">{ expProgress }/{ maxExp }</div>
          </div>
        </div>
      </div>

      <div className="use-menu flex flex-col justify-center items-center w-[200px]">
        <div className="flex w-[140px] justify-center ml-[85px]">
          <img className='notice w-[70px] h-[70px] transition duration-100 active:scale-90 cursor-pointer m-4 mr-10' src={ Notice } />
          <button className='mr-[80px] mb-[115px]' onClick={ onClickMomo }>
            <img className='momo-talk w-[63px] absolute transition duration-100 active:scale-90 cursor-pointer m-4' src={ MomoTalk } />
          </button>
        </div>
        <div className="flex w-[140px] justify-center ml-[85px]">
          <img className='notice w-[67px] h-[67px] transition duration-100 active:scale-90 cursor-pointer m-4 mr-[45px]' src={ Quest } />
          <img className='momo-talk w-[70px] transition duration-100 active:scale-90 cursor-pointer m-4' src={ PyroxeneStore } />
        </div>

        <div className="absolute flex justify-center ml-[120px] -mt-5">
          <div className='notice w-[60px] text-[#16365c] text-[23px] m-4 mr-[45px]'>공지</div>
          <div className='momo-talk w-[70px]  text-[#16365c] text-[23px] m-4'>모모톡</div>
        </div>

        <div className="absolute flex justify-center ml-[110px] mt-[195px]">
          <div className='notice w-[60px] text-[#16365c] text-[23px] m-4 mr-[18px]'>미션</div>
          <div className='momo-talk w-[100px] text-[#16365c] text-[23px] m-4'>청휘석구매</div>
        </div>
      </div>

      <img className='w-screen h-screen absolute -mt-[400px] -z-20' src={ Sub_bg } alt="" />

    </div>
  )
}

export default Main