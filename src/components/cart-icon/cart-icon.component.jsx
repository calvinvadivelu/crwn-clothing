import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styling.scss';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';


import React from 'react';

const CartIcon = (props) => {
    return (
        <div className='cart-icon' onClick={props.toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);