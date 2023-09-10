import PropTypes from 'prop-types';
import Bottle from '../bottole/bottle';
import './Cart.css'


const Cart = ({cart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className='Cart-Container'>
                {cart.map(Bottle => <img src={Bottle.img}></img>)}
            </div>
        </div>
    );
};


Cart.PropTypes = {
    cart: PropTypes.array.isRequired
}
export default Cart;

