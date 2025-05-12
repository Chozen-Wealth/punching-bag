import "./bag.css"
import sac from '../../assets/bag.png'
import sacBurst from '../../assets/bag-burst.png'

export default function Bag({pv}){

    const isWin = pv <= 0

    const imgClass = `sac ${isWin ? "animate" : ""}`

    const bag = ()=>{
    return(
        
      <img className={imgClass} src={isWin ? sacBurst : sac} alt="" />
    )
    }

    return(
        <>
            {bag()}
        </>
    )
}