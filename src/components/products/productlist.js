import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { acttype, button } from '../../data/data';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          visible: 8,
          error: false
        };
        this.loadMore = this.loadMore.bind(this);
      }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 8};
        });
    }
    
    buyProduct(id) {
        if (id) {
            let buyItem = this.props.prdata.filter((item) => item.id === id);
            this.props.buyOrder(buyItem[0]);
            this.props.history.push('/checkout?order=true');
        }
    }

    render() {
        return (
            <div className="products">
                {
                    this.props.prdata.slice(0, this.state.visible).map((item) => {
                        return (
                            <div key={item.id} className="product">
                                <Link to={`/product/${item.id}`}>
                                    <img src={item.image} alt="" title="" />
                                    <div className="desc">
                                        <p>{item.title.substring(1, 12).toUpperCase()}</p>
                                        <p>{item.description.substring(1, 50)}</p></div>
                                </Link>
                                <div className="btnwrapper">
                                    <input type="button" className="btn" onClick={this.buyProduct.bind(this, item.id)} name="buyproduct" defaultValue={button.BUY_NOW} />
                                    
                                </div>
                            </div>
                        )
                    })
                }
                <div className="loadmore">
                { this.state.visible <  this.props.prdata.length &&
                    <button onClick={this.loadMore} type="button" className="load-more btn">Load more</button>
                }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyOrder: (product) => {
            dispatch({ type: acttype.ADD_TO_ORDER, payload: product })
        },
        addToCart:(product)=>{
            dispatch({type:acttype.ADD_TO_CART, payload: product})
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductList);
ProductList.propType = {
    prdata: PropTypes.array
}