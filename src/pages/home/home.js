import React from 'react';
import ProductList from '../../components/products/productlist';
import { connect } from 'react-redux';
import { acttype,messages } from '../../data/data';
//import { getApiData } from '../../actions/action';
import loader from '../../assets/images/loader.gif';
import * as myData from '../../data/data.json';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={data:[],activeindex:0}
    }

    componentDidMount(){
        document.title=messages.SITE_NAME;
        this.setState({activeindex:1,data:myData.default})
        this.props.getData(myData.default)
    }
    render(){
        return (
            <div className="wrapper">
                {   
                this.state.activeindex? 
                    <ProductList prdata={this.state.data} {...this.props}/>
                : <h2 className="loading"><img src={loader} alt="" title=""/></h2>  
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        removeOrder:dispatch({type:acttype.REMOVE_TO_ORDER}),
        getData: (data) => dispatch({type:acttype.ADD_API_DATA,payload:data})
    }
}
const mapStateToProps = (state) => {
    return{ 
        dataexist:state.dataexist,
        apidata:state.data
     }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);