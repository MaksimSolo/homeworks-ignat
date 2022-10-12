import React, {useState} from 'react'
import {checkPeopleStateAC, homeWorkReducer, sortPeopleStateAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type PeopleType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<PeopleType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: PeopleType) => (
        <div key={p._id} className={s.people}>
            <h3>
                {p.name}
            </h3>
            <h3>
                {p.age}
            </h3>
        </div>
    ))
    let age:number = 0;
    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortPeopleStateAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortPeopleStateAC('down')))
    const checkByAge = () => {
        age = Number(prompt('type age which need to find up to:',));
        setPeople(homeWorkReducer(initialPeople, checkPeopleStateAC(+age)))
    }

    return (
        <div>
            <hr/>
            <article className={s.article}>
                <h2>
                    homeworks 8
                </h2>

                {/*should work (должно работать)*/}
                {finalPeople}

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <SuperButton onClick={sortUp}>sort up</SuperButton>
                    <SuperButton onClick={sortDown}>sort down</SuperButton>
                    <SuperButton onClick={checkByAge}>up to {age!==0 ?`${age}`: '__'}</SuperButton>
                </div>


            </article>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
