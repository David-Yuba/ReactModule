import { useEffect, useState } from "react"

export default function Clock(){

    let [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(function (){
        let intervalID = setInterval(function (){
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return function (){
            clearInterval(intervalID)
        }
    }
    , [])
    
    return(
        <div>
            <h1>Clock</h1>
            <p>{ time }</p>
        </div>
    )
}