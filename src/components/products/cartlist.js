import React from 'react';
 import { connect } from 'react-redux';
 import { acttype } from '../../data/data';
import { messages,button } from '../../data/data';

class Cartlist extends React.PureComponent{
    buyProductcart(){
        this.props.myOrder(this.props.cart);
        this.props.history.push('/order');
    }
    buyProduct() {
        this.props.myOrder(this.props.order);
        this.props.history.push('/order');
    }

    render(){
        const curr = messages.CURRENCY;
        const cart = this.props.ordr==='?order=true' ? this.props.order : this.props.cart;
        let price=0;
        return(
            <>
            <div className="right">
                    <div>
                    <h2>{messages.SHOPPING_BAG}</h2>
                    <div className="bg"> </div>
                        {
                    cart.length > 0 ?
                        cart.map((item) => (
                            <div key={item.id}>
                               <div className="cart">
                                    <div className="left"><img src={item.image} alt="" title="" width="80" /></div>
                                    <div className="right">
                                        <div className="book">
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="price">
                                            <span>{curr}{item.price.toFixed(2)}</span>
                                            <span className="hide">{ price = item.price+price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                        : <h3 className="empty">{messages.CART_EMPTY} </h3>
                        }
                    </div>
                    <div className="payment">
                        <h3>{messages.PAYMENT_INFO.paymentInfo}</h3>
                        <div className="paymentinfo">
                            <div><label>{messages.PAYMENT_INFO.itemsPrice}: </label><span>{curr}{price.toFixed(2)}</span></div>
                            <div><label>{messages.PAYMENT_INFO.tax}: </label><span>{curr}{messages.PAYMENT_INFO.taxPrice}</span></div>
                            <div><label>{messages.PAYMENT_INFO.shippingCharges}: </label><span>{curr}{messages.PAYMENT_INFO.shippingPrice}</span></div>
                            
                            <div className="hr"><label>{messages.PAYMENT_INFO.total}</label> <span>{curr}{(parseInt(7.5)+parseInt(5)+price).toFixed(2)}</span></div>
                        </div>    
                    </div>
                    {
                        this.props.ordr==='?order=true'
                        ? 
                        <input type="button" className="btn " onClick={this.buyProduct.bind(this)} name="buyproduct" defaultValue={button.PAYMENT} />
                        : 
                        <button className="btn" type="submit" onClick={this.buyProductcart.bind(this)} name="btnsubmit" value="submit">{button.PAYMENT}</button>
                    }
                    
                    </div>
            </>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        myOrder: (product) => {
            dispatch({ type:acttype.ADD_TO_MyORDER, payload: product })
        }
    }
}

export default connect(null,mapDispatchToProps)(Cartlist);