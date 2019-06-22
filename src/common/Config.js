import axios from 'axios';
import * as Global from './Global';
import qs from 'qs';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const post = (url,data,fn)=>{
    axios.post(url,qs.stringify(data)).then((res)=>{
        return fn(res);
    }).catch((err)=>{
        return fn(err);
    })
}

const get = (url,data,fn)=>{
    axios.get(Global.address+url+'/'+data).then((res)=>{
        return fn(res);
    }).catch((err)=>{
        return fn(err);
    })    
}

const put = (url,data,fn)=>{
    axios.put(Global.address+url,data).then((res)=>{
        return fn(res);
    }).catch((err)=>{
        return fn(err);
    })    
}

const del = (url,data,fn)=>{
    axios.delete(Global.address+url+'/'+data).then((res)=>{
        return fn(res);
    }).catch((err)=>{
        return fn(err);
    })    
}

export { post,get,put,del };