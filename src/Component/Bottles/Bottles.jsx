import { useEffect, useState } from "react";
import Bottle from "../bottole/bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState ([])
    const [cart, setCart] = useState ([])

    useEffect ( () => {
        fetch ('bottles.json')
        .then (res => res.json())
        .then (data => setBottles(data))
    },[])


    const handelShoppingCart = (bottle) => {
        const newShoppingCart = [...cart, bottle]
        setCart(newShoppingCart)
    }
    return (
        <div>
            <h2>Bottles Avalable: {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
            <div className="bottle-container">
            {
                bottles.map (bottle => <Bottle
                     key={bottle.id} 
                     bottle = {bottle}
                     handelShoppingCart={handelShoppingCart}
                     ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;