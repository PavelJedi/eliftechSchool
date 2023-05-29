import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./CartPage.module.scss";

function CartPage() {
  return (
    <div className={styles.cartPage}>
      <div className={styles.inputsBlock}>
        <h2>Cart</h2>
        <div className={styles.inputsContainer}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Address" />
        </div>
      </div>
      <div className={styles.cartItemsBlock}>
        <CartItem />
        <CartItem />
        <CartItem />
        {/* Add more CartItem components */}
      </div>
      <div className={styles.totalPriceBlock}>
        <p>Total Price:</p>
        <span>$50</span>
      </div>
      <div className={styles.submitBtn}>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default CartPage;
