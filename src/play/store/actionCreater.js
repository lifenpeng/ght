import { fromJS } from 'immutable';
import { post,put,get,del } from '../../common/Config';
import * as actionTypes from './acyionTypes';

export const loading = ()=>{
    return {
        type:actionTypes.LOADING
    }
}

const loading_close = ()=>{
    return {
        type:actionTypes.LOADING_CLOSE
    }
}

const user_code = (mobile,idcode,token,dispatch,PopupsCreators,AudioCreators)=>{
    post('http://ight.vip/user',{
        mobile: mobile,
        idcode: idcode,
        token: token
    },function(res){
        if(res.status===200){
            dispatch(loading_close());
            dispatch(PopupsCreators.popDisplay(dispatch,'登录成功！'));
            dispatch(AudioCreators.change_stu(true));
        }
    })
}

export const log_submit = (user,pwd,PopupsCreators,AudioCreators,my)=>{
    return (dispatch)=>{
        post('https://a.91666.cloud/member/login',{
            mobile:user,
            loginpwd:pwd,
            bindmobile:'mobileweb'
        },function(res){
            if(res.status===200){
                const d = res.data.data;
                user_code(user,d.idcode,d.token,dispatch,PopupsCreators,AudioCreators);
            }else{
                dispatch(PopupsCreators.popDisplay(dispatch,res.data.msg));
            }
        })
    }
}