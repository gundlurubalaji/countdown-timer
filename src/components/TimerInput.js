
function TimerInput({onRequestStart}) {
    // const [timeInput, setTimeInput] = useState(300)

   
   return <div>
        <label htmlFor="time-count">Enter time in seconds</label>
        <input 
            type="number" 
            id="time-count" 
            placeholder="180" 
            onKeyDown={(e) => {
                if(e.keyCode === 13 || e.which === 13){
                    onRequestStart && onRequestStart(Math.floor(e.target.value))
                }
            }}
        />
    </div>
}

export default TimerInput