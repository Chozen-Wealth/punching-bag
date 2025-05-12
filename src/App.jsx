import { useState } from 'react'
import './App.css'
import Progress from './components/progress/progress'
import Boutons from './components/boutons/boutons'
import Bag from './components/bag/bag'

function App() {
  const [animate, setAnimate] = useState(false)
  const [pdv, setPdv] = useState(100)
  const [go, setGo] = useState(false)

  const isWin = pdv <= 0

  
  return (
    <div className='App'>
      <div className='divPv'>
        <Progress pv={pdv} />
        </div>
      <div className='divSac'>
        <Bag pv={pdv} anime={animate} go={go}/>
      </div>
      <div className='divBtn'>
        <Boutons pdv={pdv} setPdv={setPdv} newAnime={setAnimate} newGo={setGo} />
      </div>
      <div className='sol'></div>
    </div>
  )
}

export default App
