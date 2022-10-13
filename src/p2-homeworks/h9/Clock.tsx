import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
        setTimerId(0)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const getTwoDigits = (num: number) => {
        return num < 10 ? '0' + num : num
    }

    let hours = getTwoDigits(date.getHours());
    let minutes = getTwoDigits(date.getMinutes());
    let seconds = getTwoDigits(date.getSeconds());

    const stringTime = hours + ':HH:' + minutes + ':MM:' + seconds + ':SS';
    const stringDate = date.toLocaleDateString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        era: "long",
    });

    return (
        <aside>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}
            <nav>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </nav>
        </aside>
    )
}

export default Clock
