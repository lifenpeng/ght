import * as actionTypes  from './actionTypes';
import { fromJS } from 'immutable';

export const change_stu = (bool)=>{
   return {
    type:actionTypes.CHANGE_STU,
    data:bool  
   }
}
