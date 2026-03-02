import React from 'react'
import Nav from '../components/Nav'
import { useStore } from '../UStore'
import CartsStore from '../components/CartsStore'

function Store() {
    return (
        <div>
            <Nav />
            <CartsStore/>
        </div>
    )
}

export default Store