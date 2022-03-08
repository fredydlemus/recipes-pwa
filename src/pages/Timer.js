import React from 'react'

const Timer = () => {

    const [timer, setTimer] = React.useState(3);
    const [timeLeft, setTimeLeft] = React.useState(0);

    const start = () => {
        let timerStart = timer;
        setTimeLeft(timerStart);

        let countDownInterval = setInterval(() => {
            setTimeLeft(timerStart--);
            if (timerStart === 0) {
                clearInterval(countDownInterval);
                setTimeLeft(0);
            }

        }, 1000);
    }


    const handleChange = (e) => {
        setTimer(e.target.value);

    }

    return (
        <div className='Timer'>
            <div className='name'>Timer</div>
            {timeLeft === 0 ? <div className='center'>
                <input type='number' min='0' max='999' step='1' value={timer} onChange={handleChange} />
                <button onClick={start}>Start</button>
            </div>
                : <div className='timeLeft'>{timeLeft}s</div>}
        </div>
    )
}

export default Timer