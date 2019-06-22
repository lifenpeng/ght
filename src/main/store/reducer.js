import { fromJS } from 'immutable';
import * as MainTypes from './actionTypes';

const defaultState = fromJS({
    list:[],
    header:null
})

export default (state = defaultState,action)=>{
    switch(action.type){
        case MainTypes.GET_LIST:
            return state.set('list',action.data);
        case MainTypes.SET_HEADER:
            return state.set('header',action.data);
        default:
            return state;
    }
}