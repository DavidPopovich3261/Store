import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStore } from '../UStore';

function Nav() {
    const navigate = useNavigate();
    const count = useStore((s)=>s.count)
    return (
        <div>
            <nav>
                <p>Zustand demo</p>
                <h1>Starter Store</h1>
                <button onClick={() => { navigate("/")}}>Shop</button>
                <button onClick={() => { navigate("/cart") }}>Cart  {count}</button>
            </nav>
        </div>
    )
}

export default Nav