import { acttype } from '../data/data';
import ApiService from '../services';
import { config } from '../data/config';

export const addToCartAct = (data)=>{
    return (dispatch)=>{
        dispatch({type:acttype.ADD_TO_CART,payload:data})
    }
}

export const setApiData = (data) => {
    return (dispatch) => {
        dispatch({type:acttype.ADD_API_DATA, payload:data})
    }
}

export const getApiData = ()=>{
    const url = config.host+config.endpoints.book;        
        let data=[]; 
    return (dispatch)=>{
        ApiService.apiCall('get',url,data, (res)=>{ 
            dispatch({type:acttype.ADD_API_DATA, payload:res.data})
        } )
    }
} 

export const removeOrder = ()=>{
    return (dispatch)=>{
        dispatch({type:acttype.REMOVE_TO_ORDER})
    }
}
