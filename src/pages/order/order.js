import React from 'react';
import { connect } from 'react-redux';
import { messages } from '../../data/data';
import '../cart/cart.css';

class Order extends React.Component {
    removeProduct(id) {
        this.props.removeOrder(id);
    }
    componentDidMount(){
        document.title=messages.SITE_NAME+' | '+messages.ORDER;
    }
    render() {
        const curr = messages.CURRENCY;
        const order = this.props.order;
        return (
            <div className="wrapper pd_20">
                <div className="order"></div>
                <h2>{messages.ORDER}</h2>
                {
                    order.length > 0 ?
                    order.map((items)=>(
                        items.map((item, index) => (
                            <div key={index}>
                                <div className="bg"></div>
                                <div className="cart">
                                    <div className="left"><img src={item.image} alt="" title="" width="80" /></div>
                                    <div className="right">
                                        <div className="book">
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="price">
                                            <span>{curr}{item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        )))
                        : <h3 className="empty">{messages.ORDER_EMPTY} </h3>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.myorder
    }
}

export default connect(mapStateToProps)(Order);