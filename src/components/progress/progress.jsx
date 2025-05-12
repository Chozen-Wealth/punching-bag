import "./progress.css"

export default function Progress({pv}){
    return(
        <>
            <progress value={pv} max="100" id='progress'></progress>
        </>
    )
}