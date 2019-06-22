import * as PopupsActionType from './actionTypes';

const hide = ()=>({
    type:PopupsActionType.POP_CLOSE,
    data:'发生错误啦！'
})

export const popDisplay = (dispatch,msg)=>{
    setTimeout(function(){
        dispatch(hide());
    },5000);
    return {
        type:PopupsActionType.POP_DISPLAY,
        data:msg
    } 
}