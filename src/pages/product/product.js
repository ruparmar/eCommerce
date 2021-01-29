import React from 'react';
import {connect} from 'react-redux';
import { button,acttype,messages } from '../../data/data';
import {addToCartAct} from '../../actions/action'
import './product.css';

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product:[],
            activeIndex:0
        }
        this.addProduct = this.addProduct.bind(this);
        this.buyProduct = this.buyProduct.bind(this);
    }
    
    componentDidMount(){
        const id = (this.props.match.params.id)-1;
        const prdData = this.props.apidata[0];
        if(prdData){
         this.setState({product:prdData[id],activeIndex:1});
         document.title=prdData[id].title;
        } else { this.props.history.push('/'); 
        }
    }
    addProduct(){
        this.props.addToCart(this.state.product);
        this.props.history.push('/cart');
    }
    buyProduct(){
        this.props.buyOrder(this.state.product);
    }
    render(){
        const curr = messages.CURRENCY;
        const product = this.state.product;
        
        return(
            <div className="wrapper">
                {
                /* this.state.activeIndex? */
                <div className="productdtl">
                <div className="left">
                    <img src={product.image} alt="" title="" width="400"/>
                </div>
                <div className="right">
                    <h3>{product.title}</h3>
                    <div className="price">
                        <label>{messages.PRICE}: </label>
                        <span>{curr}{product.price}</span>
                    </div>
                    <div className="isbn">
                        <label>{messages.ISBN}: </label>
                        <span>{product.id}</span>
                    </div>
                    <div className="product_btn_wrapper">
                        <input type="button" className="btn " onClick={this.addProduct} name="addtocart" defaultValue={button.ADD_TO_CART} />
                    </div>
                    <div className="desc">
                        <p>{product.description}</p>
                    </div>
                </div>
                </div>
                /* : <h2 className="loading">Loading ...</h2> */
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addToCart:(product)=>{
            dispatch(addToCartAct(product))
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        cart:state.cart,
        order:state.order,
        apidata:state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
