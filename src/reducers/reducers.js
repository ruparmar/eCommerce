const INITIAL_STATE = {
    cart:[],
    order:[],
    myorder:[],
    data:[],
    dataexist:0
}
 function reducers(state=INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_TO_CART':{ state = {...state, order:[]}
            const existproduct = state.cart.filter( p=> { return(p.id===action.payload.id)})
            
            if(existproduct.length>0){
                return state;
            } else {
                return {...state, cart:[...state.cart,Object.assign(action.payload)]};
            }
        }
        case 'ADD_TO_MyORDER':{
            state = {...state, order:[],cart:[]}
            return {...state, myorder:[...state.myorder,Object.assign(action.payload)]};
        }
        case 'ADD_TO_ORDER':{
            return {...state, order:[...state.order,Object.assign(action.payload)]};
        }
        case 'REMOVE_TO_ORDER':{
            return {...state, order:[]}
            }
        case 'REMOVE_TO_CART':{
            const existproduct = state.cart.filter( p=> { 
             return(p.id!==action.payload)
                })
            return {...state, cart:[...existproduct]}
        }
        case 'ADD_API_DATA':{
            return {...state, data:[ action.payload ],dataexist:1};
        }
        default: return state
    }
}

export default reducers;