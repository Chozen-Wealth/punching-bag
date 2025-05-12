import "./boutons.css"

export default function Boutons({pdv, setPdv}){

    let punch = ()=>{
        const newPdv = Math.max(pdv -10, 0)
        setPdv(newPdv)
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
            <button onClick={punch} disabled={isWin}>{isWin ? "KO !" : "Punch !"}</button>
            {reset()}
        </>
    )
}