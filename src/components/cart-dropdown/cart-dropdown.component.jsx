import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems} from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';

import './cart-dropdown.styling.scss';
import CartItem from '../cart-item/cart-item.component';

import React from 'react';

const CartDropdown = (props) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    props.cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                }
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
  })
  
export default connect(mapStateToProps)(CartDropdown);