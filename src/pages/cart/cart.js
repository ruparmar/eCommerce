import React from 'react';
import { connect } from 'react-redux';

import { acttype,messages } from '../../data/data';
import './cart.css';

class Cart extends React.Component {
    
    removeProduct(id){
        this.props.removeOrder(id);
    }

    componentDidMount(){
        document.title=messages.SITE_NAME+' | '+messages.CART;
    }

    render() {
        const curr = messages.CURRENCY;
        const cart = this.props.cart;
       
        return (
            <div className="wrapper pd_20">
                <h2>{messages.CART}</h2>

                {
                    cart.length > 0 ?
                        cart.map((item) => (
                            <div key={item.id}>
                                <div className="bg"> </div>
                                <div className="cart">
                                    <div className="left"><img src={item.image} alt="" title="" width="80" /></div>
                                    <div className="right">
                                        <div className="book">
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="price">
                                            <span>{curr}{item.price}</span>
                                        </div>
                                        <input type="button" className="btn remove" onClick={this.removeProduct.bind(this,item.id)} name="removeproduct" defaultValue="Remove" />
                                    </div>
                                </div>
                            </div>
                        )
                        )
                        : <h3 className="empty">{messages.CART_EMPTY} </h3>
                }

                <div className="product_btn_wrapper">
                    <input type="button" className="btn " onClick={() => { this.props.history.push('/') }} name="addtocart" defaultValue="Continue Shopping" />
                    {  cart.length > 0 ?
                    <input type="button" className="btn " onClick={()=>{this.props.history.push('/checkout')} } name="buyproduct" defaultValue="Checkout" />
                    : null
                    }
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        removeOrder:(id) => {
            dispatch({type:acttype.REMOVE_TO_CART,payload:id})
        }
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);