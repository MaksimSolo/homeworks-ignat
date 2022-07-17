import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
    onKeyPressAddUser: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressAddUser} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''

    return (
        <div className={s.someClass}>
            <div className={s.inputContainer}>
                <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressAddUser}/>
                <span>{error && 'Error! Typing is expected'}</span>
            </div>
            <div>
                <button onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
