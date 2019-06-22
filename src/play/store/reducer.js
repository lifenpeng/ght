import { fromJS } from 'immutable';
import * as actionTypes from './acyionTypes';

const defaultState =  fromJS({
    loading:false,
});

export default (state = defaultState,action)=>{
    switch(action.type){
        case actionTypes.LOADING:
            return state.set('loading',true);
        case actionTypes.LOADING_CLOSE:
            return state.set('loading',false);    
        default:
            return state;
    }
};
