import { fromJS } from 'immutable';
import * as PopupsActionType from './actionTypes';

const defaultState = fromJS({
    show:false,
    msg:'发生错误啦！'
})

export default (state = defaultState,action)=>{
    if(action.type===PopupsActionType.POP_DISPLAY){
        return state.set('show',true).set('msg',action.data);
    }else if(action.type===PopupsActionType.POP_CLOSE){
        return state.set('show',false).set('msg',action.data);
    }
    return state;
}