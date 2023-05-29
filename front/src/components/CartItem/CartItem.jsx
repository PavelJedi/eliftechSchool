import React from "react";
import styles from "../../pages/CartPage/CartPage.module.scss";

function CartItem() {
  return (
    <div className={styles.cartItem}>
      <div className={styles.productBlock}>
        <img src="food-image.jpg" alt="Food" />
        <div className={styles.productInfo}>
          <h3>Food Name</h3>
          <p>$10</p>
        </div>
      </div>
      <div className={styles.quantityBlock}>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          {/* Add more options for quantity */}
        </select>
      </div>
      <button className={styles.removeBtn}>Remove</button>
    </div>
  );
}

export default CartItem;
