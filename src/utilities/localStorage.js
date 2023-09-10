const getStoredCard = () => {
   const stoedCardString = localStorage.getItem ("Cart")
   if (stoedCardString) {
    return JSON.parse (stoedCardString)
   }
   return [];
}


const saveCartToLS = (cart) => {
    const cartStringfy = JSON.stringify (cart)
    localStorage.setItem ('Cart', cartStringfy)
}


const addToLS = (id) => {
    const cart = getStoredCard();
    cart.push (id);
    saveCartToLS (cart)
}

export {addToLS, getStoredCard}

