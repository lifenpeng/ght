import { fromJS } from 'immutable';
import * as MainTypes from './actionTypes';
import { post } from '../../common/Config';

const list = (data)=>({
    type:MainTypes.GET_LIST,
    data:fromJS(data)
})

const info = (item)=>({
    type:MainTypes.SET_HEADER,
    data:item
})

export const getList = (item)=>{
    return (dispatch)=>{
        post('detailed',{
            list:"1,2"
        },function(res){
            if(res.status===200){
                dispatch(list(res.data.list));
                dispatch(info(item));
            }
        })
    }
}

