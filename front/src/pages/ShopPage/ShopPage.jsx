import React from "react";
import GoodsCard from "../../components/GoodsCard/GoodsCard";
import styles from "./ShopPage.module.scss";

function ShopPage() {
  return (
    <div className={styles.shopPage}>
      <div className={styles.shopsBlock}>
        <h2>Food Delivery Shops</h2>
        <ul>
          <li>Shop 1</li>
          <li>Shop 2</li>
          <li>Shop 3</li>
          <li>Shop 4</li>
          <li>Shop 5</li>
        </ul>
      </div>
      <div className={styles.goodsBlock}>
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        {/* Add more GoodsCard components */}
      </div>
    </div>
  );
}

export default ShopPage;
