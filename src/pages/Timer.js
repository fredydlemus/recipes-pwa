import React from 'react'

const Timer = () => {

    const [timer, setTimer] = React.useState(3);
    const [timeLeft, setTimeLeft] = React.useState(0);

    const start = async() => {

        if(! ('Notification' in window) || !('serviceWorker' in navigator)) {
            return alert('Your browser does not support notifications');
        }

        if(Notification.permission === 'default') {
            await Notification.requestPermission();
        }

        if(Notification.permission === 'blocked') {
            return alert('You have blocked notifications');
        }

        if(Notification.permission !== 'granted') {
            return;
        }

        let timerStart = timer;
        setTimeLeft(timerStart);

        let countDownInterval = setInterval(() => {
            setTimeLeft(timerStart--);
            if (timerStart === 0) {
                clearInterval(countDownInterval);
                setTimeLeft(0);
                showNotification();
            }

        }, 1000);
    }

    const showNotification = async() => {
        const registration = await navigator.serviceWorker.getRegistration();
        if(!registration) return alert('No service worker found');

        registration.showNotification('Timer', {
            body: 'Time is up',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/timer-clock-time-clock-alarm-alarm-clock-clock-time-clock-timer-56989.png',
        })
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