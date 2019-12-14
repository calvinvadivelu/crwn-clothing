import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems} from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.styling.scss';
import CartItem from '../cart-item/cart-item.component';

import React from 'react';

const CartDropdown = (props) => {

    const goToCheckout = () => {
        props.history.push('/checkout')
        props.dispatch(toggleCartHidden());
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    props.cartItems.length ? 
                    props.cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                    :
                    <span className="empty-message">Your Cart is Empty</span>
                }
            </div>
            <CustomButton onClick={goToCheckout}>Go To Checkout</CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

  
export default withRouter(connect(mapStateToProps)(CartDropdown));