import './Bottle.css'
const Bottle = ({bottle, handelShoppingCart}) => {
    const {name, img, price} = bottle
    return (
        <div className="bottle">
            <h3> Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price} </p>
            <button onClick={() =>handelShoppingCart(bottle)}>Purches</button>
        </div>
    );
};

export default Bottle;