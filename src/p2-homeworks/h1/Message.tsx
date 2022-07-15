import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar:string
    name:string
    message: string
    time: string
}

function Message(props: MessageType) {

    return (
        <div className={s.message}>
            <div >
                <img src={props.avatar} alt="userprofile photo"/>
            </div>
            <div className={s.messageText}>
                <span>{props.name}</span>
                <span>{props.message}</span>
            </div>
            <div>
                <span>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
