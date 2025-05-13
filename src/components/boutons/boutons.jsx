import "./boutons.css"
import icon from '../../assets/punch.svg'
import effect from "../../assets/punch.mp3"
import { useRef, useState } from "react"

export default function Boutons({pdv, setPdv, newAnime, newGo}){
    // const [rand, setRand] = useState(Math.floor(Math.random()*3))
    let punch = ()=>{
        const newPdv = Math.max(pdv -10, 0)
        setPdv(newPdv)
        newAnime(true)
        setTimeout(() => {
            newAnime(false)
        }, 300);
        newGo(true)
        setTimeout(() => {
            newGo(false)
        }, 100);
        setRandom(Math.floor(Math.random()*10))
        if (audioRef.current) {
            audioRef.current.currentTime = 0.6;
            audioRef.current.play()
        }
    }
    let superPunch = ()=>{
        const newPdv = Math.max(pdv -20, 0)
        setPdv(newPdv)
        newAnime(true)
        setTimeout(() => {
            newAnime(false)
        }, 300);
        newGo(true)
        setTimeout(() => {
            newGo(false)
        }, 100);
        setRandom(Math.floor(Math.random()*10))
        if (audioRef.current) {
            audioRef.current.currentTime = 0.6;
            audioRef.current.play()
        }
    }
    
    const audioRef = useRef(null)
    const isWin = pdv <= 0
    
    const reset = ()=>{
        if (isWin) {
            return(
                <div className="divWin">
                    <span>Félicitation, vous avez gagné !</span>
                    <button id='reset' onClick={()=> {setPdv(100)}}>Rejouer</button>
                </div>
            )
        }
    }
    const [random, setRandom] = useState(Math.floor(Math.random()*10))
    return(
        <>
            {random === 2 ? 
            (<button id="btnSuperPunch" onClick={() => superPunch()} disabled={isWin}>{isWin ? "KO !" : (<img id="icon" src={icon} alt='' />)}</button>)
            :
            (<button id="btnPunch" onClick={() => punch()} disabled={isWin}>{isWin ? "KO !" : (<img id="icon" src={icon} alt='' />)}</button>)
            }
            {reset()}
        </>
    )
}