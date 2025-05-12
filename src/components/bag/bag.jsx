import "./bag.css"
import sac from '../../assets/bag.png'
import sacBurst from '../../assets/bag-burst.png'
import baki from "../../assets/baki.png"
import baki2 from "../../assets/baki-punch.png"

export default function Bag({pv, anime, go}){

    const isWin = pv <= 0

    const imgClass = `sac ${anime ? "animate" : ""}`
    const bakiClass = `baki ${go ? "punch" : ""}`

    const bag = ()=>{
        return(
          <img className={imgClass} src={isWin ? sacBurst : sac} alt="" />
        )
    }

    return(
            <div className="divCenter">
                <div className={bakiClass}></div>
                {bag()}
            </div>
    )
}