import React, { useEffect } from 'react'
import { useStore } from '../UStore'

function OrderSummary() {
    const carts = useStore((s) => s.carts)
    const count = useStore((s) => s.count)
    const TotalPrice = useStore((s) => s.TotalPrice)
    let contPrice = 0
    const addPrice = useStore((s) => s.addPrice)
    useEffect(() => {
        for (let item of carts) {
            console.log(item.price);
            contPrice += item.price
        }
        console.log(contPrice);
        addPrice(contPrice)
    }, [])


    return (
        <div>
            {carts &&
                <div>
                    <p>Total items: {count}</p>
                    <p>Total price: {TotalPrice}</p>
                </div>}
        </div>

    )
}

export default OrderSummary