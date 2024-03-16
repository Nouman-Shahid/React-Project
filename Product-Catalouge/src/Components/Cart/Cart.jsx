import React from 'react';
import styles from './Cart.module.css';

function Cart({ cart, updateCart }) {
  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // Remove the item at the specified index
    updateCart(updatedCart);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.container}>
      <div className={styles.heading}>

      <h2>Shopping Cart</h2>
      <h3>
          Total Price: ${cart
            .map((item) => item.price * item.quantity)
            .reduce((total, value) => total + value, 0)}
        </h3>
      </div>
        {cart.length === 0 ? (
          <p></p>
        ) : (
          <div className={styles.box4}>
            {cart.map((cartItem, cartindex) => (
              <div key={cartindex} className={styles.box} data-aos="flip-right" data-aos-duration="2000">
                <img src={cartItem.imageSrc} alt={cartItem.name} />
                <h3>{cartItem.name}</h3>
                <h4>{cartItem.description}</h4>
                <div className={styles.quan}>
                  <button
                    onClick={() => {
                      const updatedCart = [...cart];
                      updatedCart[cartindex].quantity -= 1;
                      if (updatedCart[cartindex].quantity <= 0) {
                        updatedCart.splice(cartindex, 1);
                      }
                      updateCart(updatedCart);
                    }}
                  >
                    -
                  </button>
                  <p>{cartItem.quantity}</p>
                  <button
                    onClick={() => {
                      const updatedCart = [...cart];
                      updatedCart[cartindex].quantity += 1;
                      updateCart(updatedCart);
                    }}
                  >
                    +
                  </button>
                </div>
                <h3>Price: ${cartItem.price * cartItem.quantity}</h3>
                <button
                  onClick={() => handleRemove(cartindex)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
       
      </div>
    </div>
  );
}

export default Cart;
