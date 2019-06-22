import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    navList:[
        {id:1,name:'登录',iden:0,url:'/',icon:'login'},
        {id:2,name:'帮助',iden:0,url:'/help',icon:'solution'},
        {id:3,name:'匹配',iden:1,url:'/',icon:'carry-out'},
        {id:3,name:'授权',iden:1,url:'/',icon:'credit-card'},
        {id:3,name:'代理',iden:1,url:'/',icon:'deployment-unit'},
        {id:3,name:'我的',iden:1,url:'/',icon:'bank'},
        {id:3,name:'退出',iden:1,url:'/',icon:'poweroff'},
    ],
    log_stu:false
})

export default (state = defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_STU:
            return state.set('log_stu',action.data);
        default:
            return state;
    }
}