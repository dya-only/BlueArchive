import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faEnvelope, faMaximize } from '@fortawesome/free-solid-svg-icons'

import TaskBar from '../components/TaskBar'

import Sub_bg from "../assets/sub_bg.png"
import fixBG from "./assets2/fix.jpg"
import ProfileBar from "../assets/profile_bar.png"
import Notice from "../assets/notice.png"
import MomoTalk from "../assets/momo.png"
import Quest from "../assets/quest.png"
import PyroxeneStore from "../assets/buy_blue.png"
import menubar from '../assets/menu_bar.png'
import profileBtn from '../assets/memorial_btn.png'
import settBtn from '../assets/sett_btn.png'
import BlueItemMenu from '../assets/blue_item_menu.png'
import CoinItemMenu from '../assets/coin_item_menu.png'
import ApItemMenu from '../assets/ap_item_menu.png'
import MBlueItemMenu from '../assets/m_blue_item_menu.png'
import MApItemMenu from '../assets/m_ap_item_menu.png'
import MCoinItemMenu from '../assets/m_coin_item_menu.png'
import plus from '../assets/plus.png'
import memorialCount from './assets2/memorial-count.png'
import YesBtn from './assets2/yes-btn.png'
import CancelBtn from './assets2/cancel-btn.png'
import yuuka_gym from "../assets/yuuka_gym.png"
import hoshino_mizugi from "../assets/hoshino_mizugi.png"
import momo_logo from "../assets/momo_logo.png"
import talk_logo from "../assets/talk_logo.png"
import student_logo from "../assets/momo_student_logo.png"
import momo_latest_btn from "../assets/momo_latest_btn.png"
import momo_name_btn from "../assets/momo_name_btn.png"
import momo_down_btn from "../assets/momo_down_btn.png"
import yuuka_story_btn from "../assets/yuuka_story_btn.png"
import hinaswim_story_btn from "../assets/hinaswim_story_btn.png"
import yuuka_profile from "../assets/yuuka_profile.png"
import TouchToStart from "../assets/touch_to_start.png"
import Mika_Memorial from './assets2/Mika_Memorial.mp4'
import Yuuka_Memorial from "./assets2/midsummer_cat_yuuka_gym.mp4"
import Azusa_Memorial from "./assets2/luminous_memory_azusa_mizugi.mp4"
import Hoshino_Memorial from "./assets2/theme120_hoshino_mizugi.mp4"
import Atsuko_Memorial from "./assets2/Atsuko_Memorial.mp4"
import HinaSwim_Memorial from "./assets2/hina_swim.mp4"
import Kazusa_Memorial from "./assets2/Kazusa_Memorial.mp4"

import YuukaStory1 from "./Yuuka/YuukaStory1.mp4"
import YuukaStory2 from "./Yuuka/YuukaStory2.mp4"
import YuukaStory3 from "./Yuuka/YuukaStory3.mp4"
import YuukaStory4 from "./Yuuka/YuukaStory4.mp4"
import HinaSwimStory1 from "./Hina(Swim)/HinaSwimStory1.mp4"
import HinaSwimStory2 from "./Hina(Swim)/HinaSwimStory2.mp4"
import HinaSwimStory3 from "./Hina(Swim)/HinaSwimStory3.mp4"
import HinaSwimStory4 from "./Hina(Swim)/HinaSwimStory4.mp4"
import HinaSwimStory5 from "./Hina(Swim)/HinaSwimStory5.mp4"
import LoadingAct from './Loading/BlueArchiveLoading.mp4'

import ConstantModerato from './Loading/ConstantModerato.mp3'
import LuminousMemory from "./assets2/luminous_memory.mp3"
import MidSummerCat from "./assets2/midsummer_cat.mp3"
import Theme120 from "./assets2/theme_120.mp3"
import MidnightTrip from "./assets2/MidnightTrip.mp3"
import DailyRoutine247 from './assets2/DailyRoutine247.wav'
import Theme103 from './assets2/theme_103.mp3'

function Main() {
  const [memorial, setMemorial] = useState("")
  const [level, setLevel] = useState(48)
  const [isMusic, setIsMusic] = useState(false)
  const [isSelectingMemorial, setIsSelectingMemorial] = useState(false)
  const [expProgress, setExpProgress] = useState(0)
  const [maxExp, setMaxExp] = useState(0)
  const [isMomoTalk, setIsMomoTalk] = useState(false)
  const [momoTalkNow, setMomoTalkNow] = useState(0)
  const [whoChat, setWhoChat] = useState("")
  const [whoProfile, setWhoProfile] = useState("")
  const [progress, setProgress] = useState(0)
  const [ReadingStory, setReadingStory] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [init, setInit] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)
  let _init = 0
  const [nowEndLoading, setNowEndLoading] = useState(false)
  
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
    , {"name": "미카", "text": "같이 얘기해줄 사람 모집중!", "profile": "https://static.miraheze.org/bluearchivewiki/c/c8/Mika.png", "artwork": "https://static.miraheze.org/bluearchivewiki/a/a6/Mika_full.png"}
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
    , {"name": "아카네(바니걸)", "text": "", "school": "Millennium", "profile": "https://static.miraheze.org/bluearchivewiki/9/99/Akane_%28Bunny_Girl%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/d/d3/Akane_%28Bunny_Girl%29_full.png"}
    , {"name": "히나(수영복)", "text": "", "school": "Gehenna", "profile": "https://static.miraheze.org/bluearchivewiki/4/44/Hina_%28Swimsuit%29.png", "artwork": "https://static.miraheze.org/bluearchivewiki/a/a7/Hina_%28Swimsuit%29_full.png"}
    , {"name": "카즈사", "text": "방과후 디저트부 부원입니다.", "school": "Trinity", "profile": "https://static.miraheze.org/bluearchivewiki/b/b3/Kazusa.png", "artwork": ""}
    , {"name": "와카모", "text": "후훗, 언제나 당신 곁에♡", "school": "Hyakkiyako", "profile": "https://static.miraheze.org/bluearchivewiki/a/a7/Wakamo.png", "artwork": "https://static.miraheze.org/bluearchivewiki/d/d3/Wakamo_full.png"}
  ]

  // , {"name": "", "text": "", "profile": ""}

  const Yuuka_Chats = ["안녕하세요, 선생님. 유우카입니다.", "저 기억하고 계시죠?", "*아아. 당연하지.", "뭐, 그럼 다행이구요.", "선생님의 연락처를 받아두길 잘했네요.", "모모톡으로 연락드린 건 다름이 아니라······.", "지난번 샬레 탈환 당시 사용했던 탄환의 경비 처리가 늦어지고 있어서요.", "경비는 언제쯤 청구받을 수 있을까요?", "*이쪽에서 처리해야 하는 거였어······?", "물론이죠. 탄환도 공짜는 아니니까요.", "청구서를 작성해서 보내주시면 총학생회에서", "대신 잔금을 치러줄 거에요.", "청구서 양식이라면 밀레니엄 학원에서 쓰는 것이 있어요.", "다음에 샬레를 방문할 때 가져다드릴게요.", "*도와줘서 고마워.", "어려운 일도 아닌걸요.", "그럼 좋은 하루 되세요.", "&"]
  const Yuuka_Chats2 = ["선생님! 어째서 샬레의 경비 청구서에 장난감 영수증이 포함되어 있는 건가요?", "장난감 구입은 공무와는 상관없는 일이라고요!", "*하지만 일을 하는 데 꼭 필요한 물건이었는걸······.", "안 돼요! 선생님이시면 선생님답게 학생들에게 모범을 보이셔야죠!", "이 엉망인 청구서는 제가 대신 작성해 둘 테니 그렇게 아세요!", "설마······ 청구서가 작성하기 귀찮아서 일부러 엉망으로 쓴 건 아니시겠죠?", "선ㅡ생ㅡ님ㅡ!!"]

  const HinaSwim_Chats = ["선생. 여름이야.", "*그러게~ 여름이네~", "*그리고 여름이라고 하면, 역시 바다지~!", "응, 바다도 있지.", "선생.", "······제대로 듣고 있는 거 맞아?", "*히나의 말을 허투루 들을 리가 없잖아!", "하아······.", "여름이라 마음이 풀어지는 건 이해하지만······.", "당신까지 그렇게 늘어져 있으면 나까지 곤란해.", "일이라는 건 언제나 어느 때나 쌓이는 법이야.", "이런 시기라도 예외는 아니지.", "풍기를 어지럽히는 학생들은 언제나 있으니까.", "······그러니 협력해줘. 선생.", "*수영복을 입었는데도 선도부장으로서 빈틈이 없구나!", "······풍기를 어지럽히는 선생부터 처리가 필요한 걸까.", "*죄송합니다.무엇이 필요하십니까?", "하아. 정말이지······.", "약속한 장소로 나와. 기다리고 있을게.", "!"]
  const HinaSwim_Chats2 = ["오늘의 업무 협조. 고마워. 선생.", "그럼, 이번 여름 합숙에서는 반드시 같이······.", "······.", "아, 아무것도 아니야.", "*응, 같이 놀 수 있었으면 좋겠어.", "······.", "응.", "-"]
  const HinaSwim_Chats3 = ["······선생, 오늘 저녁 약속 말인데.", "조금 뒤로 미룰 수 있을까?", "좀체 일이 끝나질 않아서 말이야.", "*그래? 그럼 어쩔 수 없지.", "아아, ······그건 오늘 했던 약속이 아니었던 걸까?", "내가 착각했던 거라면, 잊어줘.", "······응, 이해해줘서, 고마워.", "요즘 정신이 없다 보니······.", "*근데 그렇게나 바빠?", "아, 심각한 정도는 아니야.", "원래 예정되었던 스케줄을 변경하는 정도일까······.", "오늘은 순찰 업무 대신 서류 작성으로 하루를 보내게 될 것 같아.", "*이미 충분히 심각한데요?!", "뭐, 나한테는 흔히 있는 일이야.", "어쨌거나 선생과 대화를 나누고 나니 조금 후련해졌어.", "그럼 아직 남은 업무가 있다 보니 이만.", "나중에 봐.", "!"]
  const HinaSwim_Chats4 = ["새삼스럽지만. 오늘 도와줘서 고마웠어. 선생.", "*별말씀을요.", "하지만 언제까지고 이런 식으로 폐만 끼칠 순 없으니까.", "다음번엔 좀 더 업무를 빨리 끝내두고.", "그리고, 그······.", "기왕 여기까지 온 김에······.", "응, 선생 말대로, 조금은 쉬는 것도 좋을지 모르겠네.", "그때엔 오늘처럼 또 에스코트, 부탁할게.", "-"]
  const HinaSwim_Chats5 = ["선생, 오늘은 일찍 업무 처리를 시작했으니까.", "아마 남은 일도 오전 중에 다 마무리가 될 것 같아.", "그래서 말인데······.", "*응응! 물론입니다!", "아니······, 본론을 꺼내기 전에 먼저 대답부터 해도 곤란하거든······?", "나 참······. 어쨌거나 선생이 말했었지······.", "휴양지까지 와서, 쉬지 않는 건 엄청 아까운 일이라고.", "*응, 기왕 바다까지 왔으니까.", "······나로선 잘 이해되지 않는 이야기지만.", "선생이 그렇게까지 말한다면야······.", "응. 좋아. 오후엔 같이 어울려줄래?", "같이 바닷가에 놀러 가는 정도라면,", "그, 할 수 있을 테니까.", "*물론입니다!", "응. 그럼······. 이따 점심쯤에 봐. 선생", "&"]

  const StyledProgressBar = styled.div` width: ${ Math.floor(expProgress / maxExp * 100) }%; height: 5px; background-color: #59eefb`
  const MStyledProgressBar = styled.div` width: ${ Math.floor(expProgress / maxExp * 100) }%; height: 3px; background-color: #59eefb`

  const onTouch = () => {
    if (init == 100) {
      setTimeout(() => { setIsLoading(false); setMemorial(String(localStorage.getItem("MemorialSelection"))) }, 3000)
      sessionStorage.setItem("isAlreadyLoading", "true")
      console.log("end")
    }
  }

  const loading = () => {
    if (_init === 100) {
      setTimeout(() => { setNowEndLoading(true) }, 1000)
      return;
    }
    _init++
    setInit(_init)
  }

  const onMusic = () => {
    document.documentElement.requestFullscreen()
    setIsFullScreen(true)
    setIsMusic(true)
    sessionStorage.setItem("isPlaying", "true")

    setInterval(() => {
      loading()
    }, 200)

  }

  const onClickQuit = () => {
    setMomoTalkNow(0)
    setIsSelectingMemorial(false)
  }

  const onClickMemorial = () => {
    setIsSelectingMemorial(true)
  }

  const SelectMemorial = (name: String) => {
    setMemorial(String(name))
    localStorage.setItem("MemorialSelection", String(name))
  }

  const SelectChat = (name: String) => {
    setWhoChat(String(name))
  }

  const SelectStudent = (name: string) => {
    setWhoProfile(String(name))
    console.log(Characters[Characters.findIndex(e => e.name == whoProfile)].profile)
  }

  const onClickQuitMomo = () => {
    setIsMomoTalk(false)
    setWhoChat("")
    setWhoProfile("")
  }

  const onClickMomo = () => {
    setIsMomoTalk(true)
  }

  const onStory = (name: string) => {
    onClickQuitMomo()
    setReadingStory(name)
    setProgress(1)
    // localStorage.setItem("YuukaStoryProgress", String(parseInt(JSON.parse(localStorage.getItem("YuukaStoryProgress") || '{}')) + 1))
  }

  const FullScreen = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen()
      setIsFullScreen(true)
    } else {
      document.exitFullscreen()
      setIsFullScreen(false)
    }
  }

  useEffect(() => {

    if (localStorage.getItem("MemorialSelection") == null) localStorage.setItem("MemorialSelection", "Yuuka")
    if (sessionStorage.getItem("isAlreadyLoading") == null) sessionStorage.setItem("isAlreadyLoading", "false")
    if (sessionStorage.getItem("isPlaying") == null) sessionStorage.setItem("isPlaying", "false")

    if (sessionStorage.getItem("isAlreadyLoading") == "false") { ("Loading") }
    else if (sessionStorage.getItem("isAlreadyLoading") == "true") { setMemorial(String(localStorage.getItem("MemorialSelection"))) }
    if (sessionStorage.getItem("isAlreadyLoading") == "false") { setMemorial("Loading") }
    else if (sessionStorage.getItem("isAlreadyLoading") == "true") { setMemorial(String(localStorage.getItem("MemorialSelection"))) }
    if (sessionStorage.getItem("isPlaying") == "false") { setIsMusic(false) }
    else if (sessionStorage.getItem("isPlaying") == "true") { setIsMusic(true) }

    setMaxExp(1000)
    setExpProgress(612)
    
    console.log(localStorage.getItem("MemorialSelection"))
    console.log(sessionStorage.getItem("isAlreadyLoading"))

    if (!isLoading) {
      SelectMemorial(String(localStorage.getItem("MemorialSelection")))
    }
  }, [])
  
  return (
    <div className="main bg-cover font-molu-bold overflow-x-hidden">

      {/* <Loading /> */}
      { memorial == "Loading" ?
        <button className='w-screen h-screen z-50 cursor-default fixed flex justify-center items-end' onClick={ ()=>{ onTouch() } }>
          <video className="w-screen object-cover z-40" muted autoPlay loop>
            <source src={ LoadingAct } type="video/mp4" />
          </video>

          { nowEndLoading == false ?
          <div className="fixed mb-7 left-[3%] transform translate-x-1/2 translate-y-1/2 z-50">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-[#00b2fe] border-[6px] h-6 w-6"></div>
          </div>
          : null }

          { nowEndLoading == false ?
            <div className="data border-text font-molu z-50 fixed mb-4">게임 데이터를 초기화 중입니다 ··· [Data Initialize...{ init }%]</div>
          : null }

          { nowEndLoading == true ?
            <div className="data border-text font-molu z-50 fixed mb-12">© 2021 NEXON Korea Corp. & NEXON Games Co., Ltd. All Rights Reserved.</div>
          : null }

          { nowEndLoading == true ?
            <img className="touch_to_start w-[500px] opacity-75 rounded-sm z-50 fixed mb-28 transition ease-in-out duration-100 animate-pulse" src={ TouchToStart } />
          : null }
        </button>
       : null }

      { memorial == "Loading" && isMusic == true ?
        <audio loop autoPlay>
          <source src={ ConstantModerato } type="audio/mp3" />
        </audio>
       : null }

      {/* FullScreen */}
      <div className="w-screen flex justify-end fixed md:mt-[80px] pr-4" id="full-top">
        <button id="fullscreen" className='flex justify-center items-center p-1 m-2 text-2xl text-[#16365C] bg-[#CBCCFF] rounded-md shadow-lg transition duration-100 active:scale-90' onClick={FullScreen}>
          <FontAwesomeIcon className='text-lg' icon={faMaximize} />
        </button>
      </div>

      {/* Music Button */}
      { JSON.parse(isMusic.toString()) == false ?
        <div className="absolute w-full h-full backdrop-brightness-[0.2] flex items-center justify-center z-50 drop-shadow-2xl">
          <div className="flex flex-col justify-center items-center w-[650px] h-[300px] bg-white rounded-2xl">
            <div className="font-molu text-xl mb-8">※전체화면으로 설정해주세요<br/>사운드 재생을 위해 확인 버튼을 누르시면 시작합니다.<br/></div>
            <button className='music-btn bg-[#456399] font-molu transition duration-100 active:scale-90 text-white p-3 w-[80px] drop-shadow-2xl flex justify-center items-center drop-shadow-xl rounded-lg' onClick={onMusic}>확인</button>
          </div>
        </div>
       : null }

      {/* Select Memorial  */}
      { isSelectingMemorial == true ?
        <div className="fixed w-full h-full backdrop-brightness-[0.8] flex items-center justify-center z-50">
          <div className="flex flex-col justify-center items-center bg-[#F7F7F6] w-[850px] h-[650px] bg-white rounded-2xl" id="memorial-window">
            <button id="xbtn" className="quit z-20 -mt-[596px] fixed w-[50px] flex justify-end ml-[775px] transition duration-100 active:scale-[99%] cursor-pointer" onClick={ onClickQuit }>
              <FontAwesomeIcon className='text-5xl text-[#2c4663]' id="xmark" icon={faXmark} />
            </button>
            <div id="win-title" className="fixed title flex justify-center flex-col pt-[30px] w-[850px] -mt-[610px]">
              <div className='flex justify-center items-center'>
                <div id="win-text" className="font-molu-bold text-3xl text-[#2c4663] w-[115px] h-[45px] border-b-[4px] border-[#ffe03d]">당번 선택</div>
                  <button id="help-btn" className="help transition duration-100 active:scale-90 text-white bg-[#2a4566] font-bold text-xl w-8 h-8 ml-2 mb-2 rounded-md">?</button>
                </div>
              <div className="border-b-[2px] border-gray-300 w-[850px]" id="sel-under-line"></div>
            </div>
            <div id="cards" className="cards flex flex-wrap overflow-hidden overflow-y-visible justify-center items-start w-[850px] h-[400px] bg-[#D3D4D1] w-[840px] rounded-lg -mt-[40px] pt-4">
              <button id="memorial-card" className='m-[2.5px] bg-white p-4 rounded-[10px] shadow-md flex justify-center items-center flex-col transition duration-100 active:scale-95 hover:scale-[101%]' onClick={ () => SelectMemorial("Yuuka") }>
                <img id="memorial-img" className='w-[130px] h-[125px] object-cover mb-3 border-[2px] border-[#920008] border-b-[12px] rounded-[8px]' src={ yuuka_gym } />
                <img className='w-[130px]' id='memorial-count' src={memorialCount} alt=""/>
              </button>
              <button id="memorial-card" className='m-[2.5px] bg-white p-4 rounded-[10px] shadow-md flex justify-center items-center flex-col transition duration-100 active:scale-95 hover:scale-[101%]' onClick={ () => SelectMemorial("Hoshino") }>
                <img id="memorial-img" className='w-[130px] h-[125px] object-cover mb-3 border-[2px] border-[#920008] border-b-[12px] rounded-[8px]' src={ hoshino_mizugi } />
                <img className='w-[130px]' id='memorial-count' src={memorialCount} alt=""/>
              </button>
              <button id="memorial-card" className='m-[2.5px] bg-white p-4 rounded-[10px] shadow-md flex justify-center items-center flex-col transition duration-100 active:scale-95 hover:scale-[101%]' onClick={ () => SelectMemorial("Azusa") }>
                <img id="memorial-img" className='w-[130px] h-[125px] object-cover mb-3 border-[2px] border-[#920008] border-b-[12px] rounded-[8px]' src={  Characters[Characters.findIndex(e => e.name == "아즈사(수영복)")].profile } />
                <img className='w-[130px]' id='memorial-count' src={memorialCount} alt=""/>
              </button>
              <button id="memorial-card" className='m-[2.5px] bg-white p-4 rounded-[10px] shadow-md flex justify-center items-center flex-col transition duration-100 active:scale-95 hover:scale-[101%]' onClick={ () => SelectMemorial("Atsuko") }>
                <img id="memorial-img" className='w-[130px] h-[125px] object-cover mb-3 border-[2px] border-[#920008] border-b-[12px] rounded-[8px]' src={  Characters[Characters.findIndex(e => e.name == "아츠코")].profile } />
                <img className='w-[130px]' id='memorial-count' src={memorialCount} alt=""/>
              </button>
              <button id="memorial-card" className='m-[2.5px] bg-white p-4 rounded-[10px] shadow-md flex justify-center items-center flex-col transition duration-100 active:scale-95 hover:scale-[101%]' onClick={ () => SelectMemorial("Mika") }>
                <img id="memorial-img" className='w-[130px] h-[125px] object-cover mb-3 border-[2px] border-[#920008] border-b-[12px] rounded-[8px]' src={  Characters[Characters.findIndex(e => e.name == "미카")].profile } />
                <img className='w-[130px]' id='memorial-count' src={memorialCount} alt=""/>
              </button>
              <button id="memorial-card" className='m-[2.5px] bg-white p-4 rounded-[10px] shadow-md flex justify-center items-center flex-col transition duration-100 active:scale-95 hover:scale-[101%]' onClick={ () => SelectMemorial("Hina(Swim)") }>
                <img id="memorial-img" className='w-[130px] h-[125px] object-cover mb-3 border-[2px] border-[#920008] border-b-[12px] rounded-[8px]' src={  Characters[Characters.findIndex(e => e.name == "히나(수영복)")].profile } />
                <img className='w-[130px]' id='memorial-count' src={memorialCount} alt=""/>
              </button>
              <button id="memorial-card" className='m-[2.5px] bg-white p-4 rounded-[10px] shadow-md flex justify-center items-center flex-col transition duration-100 active:scale-95 hover:scale-[101%]' onClick={ () => SelectMemorial("Kazusa") }>
                <img id="memorial-img" className='w-[130px] h-[125px] object-cover mb-3 border-[2px] border-[#920008] border-b-[12px] rounded-[8px]' src={  Characters[Characters.findIndex(e => e.name == "카즈사")].profile } />
                <img className='w-[130px]' id='memorial-count' src={memorialCount} alt=""/>
              </button>
            </div>
            <div id="yes-contain" className="fixed w-[850px] -mb-[500px] flex justify-center items-center">
              <button id="cancel-btn-btn" className="transition duration-100 active:scale-90 mr-4" onClick={ onClickQuit }>
                <img className="" id="yes-btn" src={CancelBtn} alt=""/>
              </button>
              <button id="yes-btn-btn" className="transition duration-100 active:scale-90" onClick={ onClickQuit }>
                <img className="" id="yes-btn" src={YesBtn} alt=""/>
              </button>
            </div>
          </div>
        </div>
       : null }

      {/* Yuuka Story Act 1-1 */}
      { ReadingStory == "Yuuka" && progress == 1 || ReadingStory == "Yuuka" && progress == 2 ?
        <video className="w-screen absolute z-20" autoPlay onEnded={ () => setProgress(2) }>
          <source src={ YuukaStory1 } type="video/mp4" />
        </video>
       : null }
      {/* Yuuka Story Act 1-2 */}
      { ReadingStory == "Yuuka" && progress == 2 || ReadingStory == "Yuuka" && progress == 3 ?
        <video className="w-screen absolute z-30" autoPlay onEnded={ () => setProgress(3) }>
          <source src={ YuukaStory2 } type="video/mp4" />
        </video>
       : null }
      {/* Yuuka Story Act 1-3 */}
      { ReadingStory == "Yuuka" && progress == 3 || ReadingStory == "Yuuka" && progress == 4 ?
        <video className="w-screen absolute z-40" autoPlay onEnded={ () => setProgress(4) }>
          <source src={ YuukaStory3 } type="video/mp4" />
        </video>
       : null }
      {/* Yuuka Story Act 1-4 */}
      { ReadingStory == "Yuuka" && progress == 4 ?
        <video className="w-screen absolute z-50" autoPlay onEnded={ () => setTimeout(()=>{ setProgress(0); setReadingStory("") }, 1000) }>
          <source src={ YuukaStory4 } type="video/mp4" />
        </video>
       : null }

      {/* Hina(Swim) Story Act 1-1 */}
      { ReadingStory == "Hina(Swim)" && progress == 1  || ReadingStory == "Hina(Swim)" && progress == 2 ?
        <video className="h-screen w-screen flex items-start object-cover overflow-hidden z-30 absolute" autoPlay onEnded={ () => setProgress(2) }>
          <source src={ HinaSwimStory1 } type="video/mp4" />
        </video>
       : null }
      {/* Hina(Swim) Story Act 1-2 */}
      { ReadingStory == "Hina(Swim)" && progress == 2 || ReadingStory == "Hina(Swim)" && progress == 3 ?
        <video className="h-screen w-screen flex items-start object-cover overflow-hidden z-40 absolute" autoPlay onEnded={ () => setProgress(3) }>
          <source src={ HinaSwimStory2 } type="video/mp4" />
        </video>
       : null }
      {/* Hina(Swim) Story Act 1-3 */}
      { ReadingStory == "Hina(Swim)" && progress == 3 || ReadingStory == "Hina(Swim)" && progress == 4 ?
        <video className="h-screen w-screen flex items-start object-cover overflow-hidden z-50 absolute" autoPlay onEnded={ () => setProgress(4) }>
          <source src={ HinaSwimStory3 } type="video/mp4" />
        </video>
       : null }
      {/* Hina(Swim) Story Act 1-4 */}
      { ReadingStory == "Hina(Swim)" && progress == 4 || ReadingStory == "Hina(Swim)" && progress == 5 ?
        <video className="h-screen w-screen flex items-start object-cover overflow-hidden z-50 absolute" autoPlay onEnded={ () => setProgress(5) }>
          <source src={ HinaSwimStory4 } type="video/mp4" />
        </video>
       : null }
      {/* Hina(Swim) Story Act 1-5 */}
      { ReadingStory == "Hina(Swim)" && progress == 5 ?
        <video className="h-screen w-screen flex items-start object-cover overflow-hidden z-50 absolute" autoPlay onEnded={ () => setTimeout(()=>{ setProgress(0); setReadingStory("") }, 500) }>
          <source src={ HinaSwimStory5 } type="video/mp4" />
        </video>
       : null }

      {/* MoMo Talk */}
      { isMomoTalk ?
      <div className="fixed w-full h-full backdrop-brightness-[0.4] flex items-center justify-center z-50 drop-shadow-2xl">
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
            <button className='chat_btn' onClick={ ()=>setMomoTalkNow(0) }>
                <div className="square w-[110px] h-[105px] flex justify-center items-center hover:bg-[#647789] opacity-50 hover:opacity-100">
                  <img className='w-[50px]' src={ student_logo } />
                </div>
              </button>
              <button className='chat_btn' onClick={ ()=>setMomoTalkNow(1) }>
                <div className="square w-[110px] h-[105px] flex justify-center items-center hover:bg-[#647789] opacity-50 hover:opacity-100">
                  <img className='w-[55px]' src={ talk_logo } />
                </div>
              </button>
            </div>

            { momoTalkNow == 0 ?
              <div className='flex justify-center items-center'>
                <div className="chat-list w-[500px] h-[550px] bg-[#f3f7f8] border-r-[1px] border-zinc-200">
                  <div className="top-bar w-[500px] h-[70px] flex items-center justify-around ml-2">
                    <div className="text text-2xl font-molu-bold text-[#373a3d] pt-1">학생({ Characters.length })</div>
                    <img className='h-[70px] mt-5 transition duration-100 active:scale-90 cursor-pointer' src={ momo_name_btn } />
                    <img className='h-[70px] -ml-10 mt-5 transition duration-100 active:scale-90 cursor-pointer' src={ momo_down_btn } />
                  </div>
                  <div className="line-contain w-[500px] flex justify-center">
                    <div className="line w-[460px] h-[1.5px] bg-zinc-300"></div>
                  </div>
                  <div className="students mt-2 h-[460px] w-[500px] overflow-y-auto overflow-x-hidden">
                    { Characters.map((i) => {
                      return ( 
                        <button className="chat-one w-[500px] h-[85px] hover:bg-[#dce5ec] flex justify-start items-center" onClick={ () => { SelectStudent(i.name) } }>
                          <img className='rounded-full object-cover w-[68px] h-[68px] ml-4' src={ i.profile } />
                          <div className="name-last ml-4 mt-[2px] flex flex-col items-start">
                            <div className="name font-molu-bold text-2xl text-[#373a3d]">{ i.name }</div>
                            <div className="last font-molu-bold text-[22px] text-[#898c94] w-[350px] truncate flex">{ i.text }</div>
                          </div>
                        </button>
                      )
                    }) }

                  </div>
                </div>

                <div className="chat-real w-[490px] h-[534px] rounded-br-xl bg-white pt-4 overflow-y-auto overflow-x-hidden">
                  { whoProfile !== "" ?
                    <div className="student-profile flex flex-col justify-center items-center w-[500] h-[560] bg-white">
                      <div className='img-profile flex items-center flex-col'>
                        <img className='rounded-full object-cover w-[125px] h-[125px]' src={ String(Characters[Characters.findIndex(e => e.name == whoProfile)].profile) } />
                        <div className="name text-[#4c5052] text-[24px] mt-1">{ String(Characters[Characters.findIndex(e => e.name == whoProfile)].name) }</div>
                        <div className="status text-[#818488] text-[22px] -mt-2 font-molu">{ String(Characters[Characters.findIndex(e => e.name == whoProfile)].text) }</div>
                      </div>
                      <div className="table flex justify-center">
                        <div className="rank-bonus mt-2">
                          <div className="in-nav rounded-t-xl text-[#4175a0] text-2xl flex justify-center p-[7px] bg-[#daedfc] w-[460px] border-2 border-[#c5d0d5] border-b-[#daedfc]">인연 랭크 보너스</div>
                          <div className="in-nav text-[#dbdbdb] text-xl font-molu flex justify-center items-center p-[7px] bg-white h-[110px] w-[460px] border-x-2 border-[#c5d0d5]">보너스 없음</div>
                          <div className="in-nav text-[#4175a0] text-2xl flex justify-center p-[7px] bg-[#daedfc] w-[460px] border-x-2 border-[#c5d0d5]">보너스 대상</div>
                          <div className="in-nav text-[#dbdbdb] text-xl font-molu flex justify-center items-center p-[7px] bg-white h-[110px] w-[460px] border-2 border-[#c5d0d5] border-t-[#daedfc] rounded-b-xl">추가 대상 없음</div>
                        </div>
                      </div>
                    </div>
                   : null }
                </div>
              </div>
             : null }

            { momoTalkNow == 1 ?
            <div className='flex justify-center items-center'>
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

                  {/* Hayase Yuuka */}
                  <button className="chat-one w-[500px] h-[85px] hover:bg-[#dce5ec] flex justify-start items-center" onClick={ () => { SelectChat("Yuuka") } }>
                    <img className='rounded-full w-[68px] h-[68px] ml-4 object-cover' src={ yuuka_profile } />
                    <div className="name-last ml-4 mt-[2px] flex flex-col items-start">
                      <div className="name font-molu-bold text-2xl text-[#373a3d]">유우카</div>
                      <div className="last font-molu text-[22px] text-[#898c94] w-[350px] truncate flex">{ Yuuka_Chats[Yuuka_Chats.length-1] !== "&" ? Yuuka_Chats[Yuuka_Chats.length-1] : "유우카의 인연 스토리로" }</div>
                    </div>
                  </button>

                  {/* Sorasaki Hina (Swim) */}
                  <button className="chat-one w-[500px] h-[85px] hover:bg-[#dce5ec] flex justify-start items-center" onClick={ () => { SelectChat("Hina(Swim)") } }>
                    <img className='rounded-full w-[68px] h-[68px] ml-4 object-cover' src={ Characters[Characters.findIndex(e => e.name == "히나(수영복)")].profile } />
                    <div className="name-last ml-4 mt-[2px] flex flex-col items-start">
                      <div className="name font-molu-bold text-2xl text-[#373a3d]">히나(수영복)</div>
                      <div className="last font-molu text-[22px] text-[#898c94] w-[350px] truncate flex">{ HinaSwim_Chats5[HinaSwim_Chats5.length-1] !== "&" ? HinaSwim_Chats5[HinaSwim_Chats5.length-1] : "히나(수영복)의 인연 스토리로" }</div>
                    </div>
                  </button>

                </div>
              </div>
            
              <div className="chat-real w-[490px] h-[534px] rounded-br-xl bg-white pt-4 overflow-y-auto overflow-x-hidden">

                {/* Hayase Yuuka */}
                { whoChat == "Yuuka" ?
                  <div className="w-[500px] h-[85px] flex justify-start items-center">
                    <img className='rounded-full w-[68px] h-[68px] ml-4 object-cover' src={ yuuka_profile } />
                    <div className="name-last ml-4 mt-[2px]">
                      <div className="name font-molu-bold text-2xl text-[#373a3d]">유우카</div>
                    </div>
                  </div>
                : null }

                { whoChat == "Yuuka" ?
                  ( Yuuka_Chats.map((i) => {
                    if (i.split('')[0] == "*") {
                      return ( <div className='flex justify-end'>
                        <div className='one-chat p-2 m-2 max-w-[450px] bg-[#498bc7] rounded-xl text-white text-xl font-molu'>{ i.substring(1) }</div>
                      </div> )
                    } else if (i.split('')[0] == "&") {
                      return ( <button className='w-[500px] flex justify-end' onClick={ () => onStory("Yuuka") }>
                        <img className='w-[400px] mr-4 cursor-pointer transition duration-100 active:scale-90' src={ yuuka_story_btn } />
                      </button> )
                    } else {
                      return( <div className='flex justify-start'>
                        <div className='one-chat p-2 m-2 max-w-[365px] bg-[#4c586d] rounded-xl text-white text-xl font-molu'>{ i }</div>
                      </div> )
                    }
                  }) )
                  : null }
                
                { whoChat == "Yuuka" ?
                  ( Yuuka_Chats2.map((i) => {
                    if (i.split('')[0] == "*") {
                      return ( <div className='flex justify-end'>
                        <div className='one-chat p-2 m-2 max-w-[450px] bg-[#498bc7] rounded-xl text-white text-xl'>{ i.substring(1) }</div>
                      </div> )
                    } else if (i.split('')[0] == "&") {
                      return ( <button className='w-[500px] flex justify-end' onClick={ () => onStory("Yuuka") }>
                        <img className='w-[400px] mr-4 cursor-pointer transition duration-100 active:scale-90' src={ yuuka_story_btn } />
                      </button> )
                    } else {
                      return( <div className='flex justify-start'>
                        <div className='one-chat p-2 m-2 max-w-[365px] bg-[#4c586d] rounded-xl text-white text-xl'>{ i }</div>
                      </div> )
                    }
                  }) )
                : null }

                {/* Sorasaki Hina(Swim) */}
                { whoChat == "Hina(Swim)" ?
                  <div className="w-[500px] h-[85px] flex justify-start items-center">
                    <img className='rounded-full w-[68px] h-[68px] ml-4 object-cover' src={ Characters[Characters.findIndex(e => e.name == "히나(수영복)")].profile } />
                    <div className="name-last ml-4 mt-[2px]">
                      <div className="name font-molu-bold text-2xl text-[#373a3d]">히나(수영복)</div>
                    </div>
                  </div>
                : null }

                { whoChat == "Hina(Swim)" ?
                  ( HinaSwim_Chats.map((i) => {
                    if (i.split('')[0] == "*") {
                      return ( <div className='flex justify-end'>
                        <div className='one-chat p-2 m-2 max-w-[450px] bg-[#498bc7] rounded-xl text-white text-xl font-molu'>{ i.substring(1) }</div>
                      </div> )
                    } else if (i.split('')[0] == "&") {
                      return ( <button className='w-[500px] flex justify-end' onClick={ () => onStory("Hina(Swim)") }>
                        <img className='w-[400px] mr-4 cursor-pointer transition duration-100 active:scale-90' src={ yuuka_story_btn } />
                      </button> )
                    } else if (i.split('')[0] == "-") {
                      return ( <div className='flex justify-center mt-8 mb-8'><div className='w-[450px] h-[1px] rounded-full bg-zinc-400'></div></div> )
                    } else if (i.split('')[0] == "!") {
                      return ( <div className='flex justify-center mt-8 mb-8'><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div></div> )
                    } else {
                      return( <div className='flex justify-start'>
                        <div className='one-chat p-2 m-2 max-w-[365px] bg-[#4c586d] rounded-xl text-white text-xl font-molu'>{ i }</div>
                      </div> )
                    }
                  }) )
                  : null }
                
                { whoChat == "Hina(Swim)" ?
                  ( HinaSwim_Chats2.map((i) => {
                    if (i.split('')[0] == "*") {
                      return ( <div className='flex justify-end'>
                        <div className='one-chat p-2 m-2 max-w-[450px] bg-[#498bc7] rounded-xl text-white text-xl font-molu'>{ i.substring(1) }</div>
                      </div> )
                    } else if (i.split('')[0] == "&") {
                      return ( <button className='w-[500px] w-[500px] flex justify-end' onClick={ () => onStory("Hina(Swim)") }>
                        <img className='w-[400px] mr-4 cursor-pointer transition duration-100 active:scale-90' src={ yuuka_story_btn } />
                      </button> )
                    } else if (i.split('')[0] == "-") {
                      return ( <div className='flex justify-center mt-8 mb-8'><div className='w-[450px] h-[1px] rounded-full bg-zinc-400'></div></div> )
                    } else if (i.split('')[0] == "!") {
                      return ( <div className='flex justify-center mt-8 mb-8'><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div></div> )
                    } else {
                      return( <div className='flex justify-start'>
                        <div className='one-chat p-2 m-2 max-w-[365px] bg-[#4c586d] rounded-xl text-white text-xl font-molu'>{ i }</div>
                      </div> )
                    }
                  }) )
                  : null }

                { whoChat == "Hina(Swim)" ?
                  ( HinaSwim_Chats3.map((i) => {
                    if (i.split('')[0] == "*") {
                      return ( <div className='flex justify-end'>
                        <div className='one-chat p-2 m-2 max-w-[450px] bg-[#498bc7] rounded-xl text-white text-xl font-molu'>{ i.substring(1) }</div>
                      </div> )
                    } else if (i.split('')[0] == "&") {
                      return ( <button className='w-[500px] flex justify-end' onClick={ () => onStory("Hina(Swim)") }>
                        <img className='w-[400px] mr-4 cursor-pointer transition duration-100 active:scale-90' src={ yuuka_story_btn } />
                      </button> )
                    } else if (i.split('')[0] == "-") {
                      return ( <div className='flex justify-center mt-8 mb-8'><div className='w-[450px] h-[1px] rounded-full bg-zinc-400'></div></div> )
                    } else if (i.split('')[0] == "!") {
                      return ( <div className='flex justify-center mt-8 mb-8'><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div></div> )
                    } else {
                      return( <div className='flex justify-start'>
                        <div className='one-chat p-2 m-2 max-w-[365px] bg-[#4c586d] rounded-xl text-white text-xl font-molu'>{ i }</div>
                      </div> )
                    }
                  }) )
                : null }

                { whoChat == "Hina(Swim)" ?
                  ( HinaSwim_Chats4.map((i) => {
                    if (i.split('')[0] == "*") {
                      return ( <div className='flex justify-end'>
                        <div className='one-chat p-2 m-2 max-w-[450px] bg-[#498bc7] rounded-xl text-white text-xl font-molu'>{ i.substring(1) }</div>
                      </div> )
                    } else if (i.split('')[0] == "&") {
                      return ( <button className='w-[500px] flex justify-end' onClick={ () => onStory("Hina(Swim)") }>
                        <img className='w-[400px] mr-4 cursor-pointer transition duration-100 active:scale-90' src={ yuuka_story_btn } />
                      </button> )
                    } else if (i.split('')[0] == "-") {
                      return ( <div className='flex justify-center mt-8 mb-8'><div className='w-[450px] h-[1px] rounded-full bg-zinc-400'></div></div> )
                    } else if (i.split('')[0] == "!") {
                      return ( <div className='flex justify-center mt-8 mb-8'><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div></div> )
                    } else {
                      return( <div className='flex justify-start'>
                        <div className='one-chat p-2 m-2 max-w-[365px] bg-[#4c586d] rounded-xl text-white text-xl font-molu'>{ i }</div>
                      </div> )
                    }
                  }) )
                : null }

                { whoChat == "Hina(Swim)" ?
                  ( HinaSwim_Chats5.map((i) => {
                    if (i.split('')[0] == "*") {
                      return ( <div className='flex justify-end'>
                        <div className='one-chat p-2 m-2 max-w-[450px] bg-[#498bc7] rounded-xl text-white text-xl font-molu'>{ i.substring(1) }</div>
                      </div> )
                    } else if (i.split('')[0] == "&") {
                      return ( <button className='w-[500px] flex justify-end' onClick={ () => onStory("Hina(Swim)") }>
                        <img className='w-[400px] mr-4 cursor-pointer transition duration-100 active:scale-90' src={ hinaswim_story_btn } />
                      </button> )
                    } else if (i.split('')[0] == "-") {
                      return ( <div className='flex justify-center mt-8 mb-8'><div className='w-[450px] h-[1px] rounded-full bg-zinc-400'></div></div> )
                    } else if (i.split('')[0] == "!") {
                      return ( <div className='flex justify-center mt-8 mb-8'><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div><div className='w-[8px] h-[8px] rounded-2xl mr-4 bg-zinc-400'></div></div> )
                    } else {
                      return( <div className='flex justify-start'>
                        <div className='one-chat p-2 m-2 max-w-[365px] bg-[#4c586d] rounded-xl text-white text-xl font-molu'>{ i }</div>
                      </div> )
                    }
                  }) )
                : null }

              </div>
            </div>
             : null }


          </div>
        </div>
      </div>
      : null }

      {/* Memorial Musics */}
      { isMusic == true && memorial == "Yuuka" && progress == 0 ?
        <audio loop autoPlay>
          <source src={ MidSummerCat } type="audio/mp3" />
        </audio>
       : null }

      { isMusic == true && memorial == "Azusa" && progress == 0 ?
        <audio loop autoPlay>
          <source src={ LuminousMemory } type="audio/mp3" />
        </audio>
       : null }

      { isMusic == true && memorial == "Hoshino" && progress == 0 ?
        <audio loop autoPlay>
          <source src={ Theme120 } type="audio/mp3" />
        </audio>
       : null }

      { isMusic == true && memorial == "Atsuko" && progress == 0 ?
        <audio loop autoPlay>
          <source src={ MidnightTrip } type="audio/mp3" />
        </audio>
       : null }

      { isMusic == true && memorial == "Mika" && progress == 0 ?
        <audio loop autoPlay>
          <source src={ DailyRoutine247 } type="audio/mp3" />
        </audio>
       : null }

      { isMusic == true && memorial == "Hina(Swim)" && progress == 0 ?
        <audio loop autoPlay>
          <source src={ MidnightTrip } type="audio/mp3" />
        </audio>
       : null }

      { isMusic == true && memorial == "Kazusa" && progress == 0 ?
        <audio loop autoPlay>
          <source src={ Theme103 } type="audio/mp3" />
        </audio>
       : null }

      {/*/!* Memorial Acts *!/*/}
      { memorial == "Yuuka" ?
        <video className="h-screen w-screen object-cover overflow-auto -z-10 fixed" muted autoPlay loop>
          {/* object-none min-w-[2000px] overflow-auto fixed -ml-10 -mt-6 -z-10 */}
          <source src={ Yuuka_Memorial } type="video/mp4" />
        </video>
      : null }

      { memorial == "Azusa" ?
        <video className="h-screen w-screen object-cover overflow-auto -z-10 fixed" muted autoPlay loop>
          {/* w-screen overflow-none fixed m-0 -z-10 */}
          <source src={ Azusa_Memorial } type="video/mp4" />
        </video>
      : null }

      { memorial == "Hoshino" ?
        <video className="h-screen w-screen object-cover overflow-auto -z-10 fixed" muted autoPlay loop>
          {/* w-screen overflow-none fixed m-0 -z-10 */}
          <source src={ Hoshino_Memorial } type="video/mp4" />
        </video>
      : null }

      { memorial == "Atsuko" ?
        <video className="h-screen w-screen object-cover overflow-auto -z-10 fixed" muted autoPlay loop>
          {/* w-screen overflow-none fixed m-0 -z-10 */}
          <source src={ Atsuko_Memorial } type="video/mp4" />
        </video>
      : null }

      { memorial == "Mika" ?
        <video className="h-screen w-screen object-cover overflow-auto -z-10 fixed" muted autoPlay loop>
          {/* w-screen overflow-none fixed m-0 -z-10 */}
          <source src={ Mika_Memorial } type="video/mp4" />
        </video>
      : null }

      { memorial == "Hina(Swim)" ?
        <video className="h-screen w-screen object-cover overflow-auto -z-10 fixed" muted autoPlay loop>
          {/* w-screen overflow-none fixed m-0 -z-10 */}
          <source src={ HinaSwim_Memorial } type="video/mp4" />
        </video>
      : null }
      { memorial == "Kazusa" ?
        <video className="h-screen w-screen object-cover overflow-auto -z-10 fixed" muted autoPlay loop>
          {/* w-screen overflow-none fixed m-0 -z-10 */}
          <source src={ Kazusa_Memorial } type="video/mp4" />
        </video>
       : null }

      {/* <Link to="/pickup">
        <button className='btn bg-[#456399] font-molu transition duration-100 active:scale-90 text-white p-3 m-4 w-[80px] drop-shadow-2xl flex justify-center items-center drop-shadow-xl rounded-lg'>모집</button>
      </Link> */}

      {/* <LobbyNavBar /> */}
      <div className="lobby-navbar flex items-center justify-end fixed pr-[58px] mt-8 w-screen" id="lobby-bar">

        <div className="items flex justify-center items-center mr-[50px]" id="items">

          <div className="item-menu flex justify-start items-center w-[200px] mr-2" id="ap-contain">
            <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[85%]' id="item-menu" src={ ApItemMenu } />
            <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[85%] invisible' id="m-ap" src={ MApItemMenu } />
            <div className="font-molu-bold text-[#16365c] text-[24px] mt-1 pl-[47px] tracking-tight flex justify-center" id="item-count-ap">60/148</div>
          </div>

          <img className='w-6 h-6 fixed mr-[275px] cursor-pointer transition duration-100 active:scale-90' id='plus1' src={ plus } />

          <div className="item-menu flex justify-start items-center w-[200px] mr-2" id="item-contain">
            <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[85%]' id="item-menu" src={ CoinItemMenu } />
            <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[85%]' id="m-item-menu" src={ MCoinItemMenu } />
            <div className="font-molu-bold text-[#16365c] text-[24px] mt-1 pl-[55px] tracking-tight flex justify-center" id="item-count-coin">4504918</div>
          </div>

          <div className="item-menu flex justify-start items-center w-[200px]" >
            <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[85%]' id="item-menu" src={ BlueItemMenu } />
            <img className='absolute shadow-xl rounded-sm w-[200px] -z-10 opacity-[85%] invisible' id="m-blue" src={ MBlueItemMenu } />
            <div className="font-molu-bold text-[#16365c] text-[24px] mt-1 pl-[45px] tracking-tight flex justify-center" id="item-count-blue">12402</div>
          </div>

          <img className='w-6 h-6 fixed ml-[555px] cursor-pointer transition duration-100 active:scale-90' id='plus2' src={ plus } />

        </div>

        <div className="menu flex justify-center items-center">
          <img className='absolute shadow-xl rounded-sm w-[240px] -z-10' id="menubar" src={ menubar } />

          <div className="flex items-center justify-center cursor-pointer">
            <img className='w-[33px] transition duration-100 active:scale-90' id="menu-btn" src={ profileBtn } onClick={ onClickMemorial } />
            <div className="round rounded-full bg-red-500 w-[15px] h-[15px] -ml-[100px] -mt-[25px] fixed animate-ping" id="ping" onClick={ onClickMemorial }></div>
            <div className="round rounded-full bg-red-500 w-[15px] h-[15px] -ml-[100px] -mt-[25px] fixed" id="ping"></div>

            <div className="sub-line bg-neutral-400 w-[1px] h-[21px] rotate-[12deg] mr-5 ml-5 rounded-2xl" id="sub-line"></div>

            <FontAwesomeIcon className='text-[27px] text-[#426199] transition duration-100 active:scale-90 cursor-pointer' id="menu-btn" icon={ faEnvelope } />

            <div className="sub-line bg-neutral-400 w-[1px] h-[21px] rotate-[12deg] mr-5 ml-5 rounded-2xl" id="sub-line"></div>

            <img className='w-[24px] transition duration-100 active:scale-90 cursor-pointer' id="set-menu-btn" src={ settBtn } />
          </div>
        </div>
      </div>

      <TaskBar />

      <div className="profile w-[320px] flex justify-center items-center mt-8 mb-[35px]" id='profile-contain'>
        <img className='w-[350px] absolute -z-10 ml-7' id='profilemenu' src={ ProfileBar } />

        <div className="profile-text flex items-center ml-[100px]" id="profiles">
          <div className="lv mr-6 -ml-14" id="lv-contain">
            <div className="lv-text font-molu text-[30px] text-[#eee466] -mb-3 italic" id="lv-text">Lv.</div>
            <div className="lv font-molu-bold text-5xl text-white italic -ml-3" id='lv'>{ level }</div>
          </div>

          <div className="name">
            <div className="usrname font-molu-bold text-white text-[24px]" id="name">공주님을지켜</div>
            <div className="exp-bar bg-[#3e4f61] h-[5px] w-[215px]" id="exp">
              {/* <div className="exp-progress bg-[#59eefb] h-[5px] w-[60%]"></div> */}
              <div id="exp-bar">
                <StyledProgressBar></StyledProgressBar>
              </div>
              <div id="m-exp-bar" className='invisible -mt-[5px]'>
                <MStyledProgressBar></MStyledProgressBar>
              </div>
            </div>
            <div className="exp-text text-[#59eefb]" id="exp-text">{ expProgress }/{ maxExp }</div>
          </div>
        </div>
      </div>

      <div className="use-menu flex flex-col justify-center items-center w-[200px]" id='use-m'>
        <div className="flex w-[140px] justify-center ml-[85px]" id='use-icons'>
          <img className='notice w-[70px] h-[70px] transition duration-100 active:scale-90 cursor-pointer m-4 mr-10' id='notice' src={ Notice } />
          <button className='mr-[80px] mb-[115px]' id='momobtn' onClick={ onClickMomo }>
            <img className='momo-talk w-[63px] absolute transition duration-100 active:scale-90 cursor-pointer m-4' id='momotalk' src={ MomoTalk } />
            {/*<div className="round rounded-full bg-red-500 w-[15px] h-[15px] ml-[70px] mt-[20px] fixed animate-ping"></div>*/}
            {/*<div className="round rounded-full bg-red-500 w-[15px] h-[15px] ml-[70px] mt-[20px] fixed"></div>*/}
          </button>
        </div>
        <div className="flex w-[140px] justify-center ml-[85px]" id='under'>
          <img className='notice w-[67px] h-[67px] transition duration-100 active:scale-90 cursor-pointer m-4 mr-[45px]' id='mission' src={ Quest } />
          <img className='momo-talk w-[70px] transition duration-100 active:scale-90 cursor-pointer m-4' id='blue' src={ PyroxeneStore } />
        </div>

        <div className="absolute flex justify-center ml-[120px] -mt-5">
          <div className='notice w-[60px] text-[#16365c] text-[23px] m-4 mr-[45px]' id="t-notice">공지</div>
          <div className='momo-talk w-[70px]  text-[#16365c] text-[23px] m-4' id="t-momotalk">모모톡</div>
        </div>

        <div className="absolute flex justify-center ml-[110px] mt-[195px]">
          <div className='notice w-[60px] text-[#16365c] text-[23px] m-4 mr-[18px]' id="t-mission">미션</div>
          <div className='momo-talk w-[100px] text-[#16365c] text-[23px] m-4' id="t-blue">청휘석구매</div>
        </div>
      </div>

      <img className='w-screen object-cover fixed -mt-[280px] brightness-75 -z-20' src={ fixBG } alt="" />

    </div>
  )
}

export default Main