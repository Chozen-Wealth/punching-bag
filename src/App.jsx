import { useState } from 'react'
import './App.css'
import sac from './assets/bag.png'
import sacBurst from './assets/bag-burst.png'

function App() {

  const [pdv, setPdv] = useState(100)
  let punch = ()=>{
    const newPdv = Math.max(pdv -10, 0)
    setPdv(newPdv)
    console.log("-10pv" + " pv restant : " + newPdv)
    
  }

  const isWin = pdv <= 0

  const bag = ()=>{
    return(
      <img src={isWin ? sacBurst : sac} alt="" />
    )
  }
  const reset = ()=>{
    if (isWin) {
      return(
        <button onClick={()=> {setPdv(100)}}>Rejouer</button>
      )
    }

  }
  return (
    <div className='App'>
      <div className='divPv'>
        <progress value={pdv} max="100" id='progress'></progress>
        </div>
      <div className='divSac'>
        {bag()}
      </div>
      <div className='divBtn'>
        <button onClick={punch} disabled={isWin}>{isWin? "KO !" : "Punch !"}</button>
        {reset()}
      </div>
    </div>
  )
}

export default App
