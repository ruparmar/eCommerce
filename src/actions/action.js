import { acttype } from '../data/data';
import ApiService from '../services';
import { config } from '../data/config';

export const getApiData = ()=>{
    const url = config.host+config.endpoints.book;        
        let data=[]; 
    return (dispatch)=>{
        ApiService.apiCall('get',url,data, (res)=>{ 
            dispatch({type:acttype.ADD_API_DATA,payload:res.data})
        } )
       
    }
} 