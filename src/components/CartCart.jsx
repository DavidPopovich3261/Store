import React from 'react'
import { useStore } from '../UStore'

function CartCart() {
    const carts = useStore((s) => s.carts)
    const removeCart = useStore((s) => s.removeCart)
    const dnc = useStore((s) => s.dnc)
    const dncPrice = useStore((s) => s.dncPrice)

    return (
        <div>
            {carts[0] ? carts.map((item, i) => {
                return (
                    <div key={i}>
                        <p>{item.description}</p>
                        <button onClick={() => {
                            item.incart = false
                            removeCart(item)
                            dnc()
                            dncPrice(item.price)

                        }}> remove</button>
                    </div>
                )
            }) : <p>הסל ריק</p>}
        </div>
    )
}

export default CartCart