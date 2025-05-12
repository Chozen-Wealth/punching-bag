import "./boutons.css"
import icon from '../../assets/punch.svg'

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
    
    const isWin = pdv <= 0
    
    const reset = ()=>{
        if (isWin) {
            return(
                <button id='reset' onClick={()=> {setPdv(100)}}>Rejouer</button>
            )
        }
    }

    return(
        <>
            <button id="btnPunch" onClick={punch} disabled={isWin}>{isWin ? "KO !" : (<img id="icon" src={icon} alt='' />)}</button>
            {reset()}
        </>
    )
}