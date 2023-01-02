import { useEffect, useState } from 'react'

import LoadingAct from './Loading/BlueArchiveLoading.mp4'
import ConstantModerato from './Loading/ConstantModerato.mp3'

function Start() {
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(()=>{ setIsLoading(false) }, 20000)
  // }, [])

  return (
    <div className="start bg-cover font-molu-bold overflow-x-hidden">
      { isLoading == true ?
          <video className="w-screen h-screen fixed z-50" muted autoPlay loop>
            <source src={ LoadingAct } type="video/mp4" />
          </video>
      : null }
    </div>
  )
}

export default Start