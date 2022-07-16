import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    filter: FilterType
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }
    const setBtnClass = (filter:FilterType)=>{
        return (`${s.button}${props.filter === filter? s.active:''}`)
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={setBtnClass('all')}>All</button>
            <button onClick={setHigh} className={setBtnClass('high')}>High</button>
            <button onClick={setMiddle} className={setBtnClass('middle')}>Middle</button>
            <button onClick={setLow} className={setBtnClass('low')}>Low</button>
        </div>
    )
}

export default Affairs
