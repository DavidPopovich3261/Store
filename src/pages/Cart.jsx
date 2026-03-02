import React from 'react'
import Nav from '../components/Nav'
import { useStore } from '../UStore'
import CartCart from '../components/CartCart'
import OrderSummary from '../components/OrderSummary'

function Cart() {

    return (
        <div>
            <Nav />
            <CartCart />
            <OrderSummary />
        </div>
    )
}

export default Cart