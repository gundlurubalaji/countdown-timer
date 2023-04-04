import { useState } from "react"
import TimerInput from "./TimerInput"



function CountDownTimer() {

    const [currentTime, setCurrentTime] = useState(0)
    const [intervalId, setIntervalId] = useState(null)

    const startNewTimer = () => {
        setIntervalId(setInterval(() => {
            setCurrentTime(currentTime => {
                if (currentTime > 0) {
                    return currentTime - 1
                }
                destroyExistingTimer()
                return currentTime
            })
        }, 1000))
    }

    const destroyExistingTimer = () => {
        if (intervalId) {
            clearInterval(intervalId)
            setIntervalId(null)
        }
    }

    const startTimer = (timeInSeconds) => {
        console.log(`Starting timer with time ${timeInSeconds} seconds`)
        destroyExistingTimer()
        setCurrentTime(timeInSeconds)
        startNewTimer()

    }

    return <div id="count-down-app">
        <TimerInput onRequestStart={startTimer} />
        <div id="current-time">
            {currentTime}
        </div>
    </div>
}

export default CountDownTimer