import { useEffect, useState } from "react";
import Bottle from "../bottole/bottle";
import './Bottles.css'
import { addToLS, getStoredCard } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState ([])
    const [cart, setCart] = useState ([])

    useEffect ( () => {
        fetch ('bottles.json')
        .then (res => res.json())
        .then (data => setBottles(data))
    },[])

    useEffect (()=> {
        console.log ( 'called the use efficet', bottles.length)
        if (bottles.length > 0) {
            const StordCard = getStoredCard(); 
         console.log (StordCard, bottles)
            const sevedCart = []
         for (const id of StordCard){
            console.log (id)
            const bottle = bottles.find (bottle => bottle.id === id)
            if (bottle) {
                sevedCart.push (bottle);
            }
         }

         console.log ("Saved Cart", sevedCart )
         setCart (sevedCart)
        }
    },[bottles])


    const handelShoppingCart = (bottle) => {
        const newShoppingCart = [...cart, bottle]
        setCart(newShoppingCart)
        addToLS (bottle.id)
    }
    return (
        <div>
            <h2>Bottles Avalable: {bottles.length}</h2>
            
            <Cart cart ={cart}></Cart>

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