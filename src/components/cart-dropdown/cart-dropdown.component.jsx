import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styling.scss';

import React from 'react';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    );
};

export default CartDropdown;