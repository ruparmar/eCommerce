import React from 'react';
import { connect } from 'react-redux';
import Cartlist from '../../components/products/cartlist';
import { messages, button } from '../../data/data';
import './checkout.css';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frmElementName: '', email: '', fname: '', lname: '', address: '', apartment: '', city: '', pincode: '', errorMsg: '', loading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        let errorMsg = {};
        let isValid = true;

        if (this.state.fname.trim() === "" || this.state.lname.trim() === '' || this.state.email.trim() === "") {
            isValid = false;
            errorMsg = messages.ERROR_REQUIRED;
        } else { this.setState({ errorMsg: '' }); }
        if (isValid) {
            //
        } else {
            this.setState({ errorMsg });
        }
    }
    handleChange(e) {
        let frmElementName = e.target.name;
        this.setState({ [frmElementName]: e.target.value });
    }
    componentDidMount(){
        document.title=messages.SITE_NAME+' | '+messages.CHECKOUT;
    }
    render() {
        const cart = this.props.cart;
        return (
            <div className="wrapper pd_20">
                <div className="checkout">
                    <div className="left">
                        <form method="post" onSubmit={this.handleSubmit} id="checkoutfrm" >
                            <div >
                                <h2>
                                    {messages.SHIPPING}
                                </h2>
                            </div>
                            <div className="error">{this.state.errorMsg}</div>
                            <div className="shp_frm">
                                <label>{messages.SHIPPING_FORM.firstName}*:</label>
                                <input defaultValue="" required type="text" placeholder="First name" name="fname" onChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="shp_frm">
                                <label>{messages.SHIPPING_FORM.lastName}*:</label>
                                <input type="text" required placeholder="last name" name="lname" onChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="shp_frm" >
                                <label>{messages.SHIPPING_FORM.email}*:</label>
                                <input type="email" required placeholder="Email" name="email" onChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="shp_frm">
                                <label>{messages.SHIPPING_FORM.address1}:</label>
                                <input type="text" placeholder="Address" name="address" onChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="shp_frm">
                                <label>{messages.SHIPPING_FORM.address2}:</label>
                                <input type="text" placeholder="Apartment, suit etc OPTIONAL" name="apartment" onChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="shp_frm">
                                <label>{messages.SHIPPING_FORM.city}:</label>
                                <input type="text" placeholder="city" name="city" onChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="shp_frm">
                                <label>{messages.SHIPPING_FORM.pincode}:</label>
                                <input type="text" placeholder="Pincode" name="pincode" onChange={this.handleChange.bind(this)} />
                            </div>
                            <button className="btn" type="submit" name="btnsubmit" value="submit">{button.SAVE_ADDRESS}</button>
                        </form>
                    </div>
                    {
                        this.props.location.search === '?order=true'
                            ? <Cartlist cart={this.props.order} ordr={this.props.location.search} {...this.props} />
                            :
                            cart.length > 0 ?
                                <Cartlist cart={this.props.cart} ordr={this.props.location.search} {...this.props}/>
                                : null
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        order: state.order
    }
}
export default connect(mapStateToProps)(Checkout);