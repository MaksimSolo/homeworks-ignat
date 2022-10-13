import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import gear from './assets/Gear-0.2s-200px.svg'


function HW10() {

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        console.log('loading...')
        setTimeout(() => {
            dispatch(loadingAC(false))
            console.log('loading stopped')
        }, 5000)

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {loading ?
                <div>
                    <img src={gear} alt="preloader image"/>
                </div>
                : <div>
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
