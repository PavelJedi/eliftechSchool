import React from "react";
import styles from "../../pages/ShopPage/ShopPage.module.scss";

function GoodsCard() {
  return (
    <div className={styles.goodsCard}>
      <img src="food-image.jpg" alt="Food" />
      <h3>Food Name</h3>
      <button>Add to Cart</button>
    </div>
  );
}

export default GoodsCard;
