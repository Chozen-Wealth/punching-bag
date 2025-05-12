import "./boutons.css"
import icon from '../../assets/punch.svg'
import effect from "../../assets/punch.mp3"
import { useRef } from "react"

export default function Boutons({pdv, setPdv, newAnime, newGo}){
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
        
        console.log("-10pv" + " pv restant : " + newPdv)
    }
    
    const handlePunch = ()=>{
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

    return(
        <>
            <audio src={effect} ref={audioRef}></audio>
            <button id="btnPunch" 
            onClick={() => {punch();
                 handlePunch();}
                 } disabled={isWin}>{isWin ? "KO !" : (<img id="icon" src={icon} alt='' />)}</button>
            {reset()}
        </>
    )
}