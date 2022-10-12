import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {PeopleType} from "../../HW8";

let initialState: PeopleType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

describe('reducer tests', () => {
    test('sort name up', () => {
        const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})
        const resultIdArr = [0, 2, 5, 4, 3, 1,].filter((el, index) => el === newState[index]._id)

        expect(resultIdArr.length).toEqual(newState.length)
    })
    test('sort name down', () => {
        const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
        const resultIdArr = [1, 3, 4, 5, 2, 0,].filter((el, index) => el === newState[index]._id)

        expect(resultIdArr.length).toEqual(newState.length)

    })
    test('check age 40', () => {
        const newState = homeWorkReducer(initialState, {type: 'check', payload: 40})
        const resultIdArr = [0, 2, 4,].filter((el, index) => el === newState[index]._id)
        const resultAgeArr = [3, 16, 40,].filter((el, index) => el === newState[index].age)

        expect(resultIdArr.length).toEqual(newState.length)
        expect(resultAgeArr.length).toEqual(newState.length)
    })
})

