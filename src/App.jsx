import { useState } from 'react'
import './App.css'
import Progress from './components/progress/progress'
import Boutons from './components/boutons/boutons'
import Bag from './components/bag/bag'

function App() {

  const [pdv, setPdv] = useState(100)

  const isWin = pdv <= 0

  
  return (
    <div className='App'>
      <div className='divPv'>
        <Progress pv={pdv} />
        </div>
      <div className='divSac'>
        <Bag pv={pdv}/>
      </div>
      <div className='divBtn'>
        <Boutons pdv={pdv} setPdv={setPdv}/>
      </div>
    </div>
  )
}

export default App
