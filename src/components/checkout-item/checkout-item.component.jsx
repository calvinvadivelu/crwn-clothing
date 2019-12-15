import React from 'react';
import './checkout-item.styling.scss';
import { connect } from 'react-redux';
// import { clearItemFromCart } from '../../redux/cart/cart.actions';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = (props) => {
    const { name, imageUrl, price, quantity } = props.cartItem;
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={() => props.removeItem(props.cartItem)}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => props.addItem(props.cartItem)}>&#10095;</span>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => props.clearItem(props.cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);