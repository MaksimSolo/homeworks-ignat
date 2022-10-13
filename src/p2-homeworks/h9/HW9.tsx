import React from 'react'
import Clock from './Clock'
import s from './HW9.module.css'

function HW9() {
    return (
        <div>
            <hr/>
            <article className={s.article}>
                <h3>
                    homeworks 9
                </h3>
                {/*should work (должно работать)*/}
                <Clock/>
            </article>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
