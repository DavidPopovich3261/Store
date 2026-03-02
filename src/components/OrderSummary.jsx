import React, { useEffect } from 'react'
import { useStore } from '../UStore'

function OrderSummary() {
    const carts = useStore((s) => s.carts)
    const count = useStore((s) => s.count)
    const TotalPrice = useStore((s) => s.TotalPrice)
    return (
        <div>
            {carts[0] &&
                <div>
                    <p>Total items: {count}</p>
                    <p>Total price: { TotalPrice.toFixed(2)}</p>
                </div>}
        </div>

    )
}

export default OrderSummary