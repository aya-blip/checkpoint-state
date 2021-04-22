import {TOOGLE_FILTER} from './types'
export const toggleFilter= (filter)=>{
    return{
        type:TOOGLE_FILTER,
        payload:filter
    }
}