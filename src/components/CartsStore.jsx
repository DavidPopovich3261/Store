import React from 'react'
import { useStore } from '../UStore'

function CartsStore() {
    const cartStore = useStore((s) => s.cartStore)
    const carts = useStore((s) => s.carts)
    const addCart = useStore((s) => s.addCart)
    const removeCart = useStore((s) => s.removeCart)
    const inc = useStore((s) => s.inc)
    const dnc = useStore((s) => s.dnc)
    const addPrice = useStore((s) => s.addPrice)
    return (
        <div>
            {cartStore.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{String(item.description)}</p>
                        <button onClick={() => {
                            if (!item.incart) {
                                item.incart = true
                                addCart(item)
                                inc()
                            }
                            else {
                                item.incart = false
                                removeCart(item)
                                dnc()
                            }
                        }}>  {!item.incart ? "Add to cart" : "remove"}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default CartsStore