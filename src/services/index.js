import axios from 'axios';

class ApiService{
    static apiCall(method, url, data, callback){
        //let headers = {}
        axios({
            method,
            url,
            data
        }).then( res=>callback(res))
        .catch( err=>callback(err))
    }
}

export default ApiService;