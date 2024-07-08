import clsx from "clsx";
import { Product } from "../Product";
import s from "./ProductsList.module.scss";
import { barItems, products } from "./constants";
import { useState } from "react";

export function ProductsList() {
  const [activeItem, setActiveItem] = useState(barItems[0].name);

  return (
    <div className={s.root}>
      <div className={s.bar}>
        <div className={s.list}>
          {barItems.map((item) => (
            <div
              className={clsx(
                s.listItem,
                item.name === activeItem && s.listItem_isActive
              )}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className={s.products}>
        {products.map((product, i) => (
          <Product
            key={i}
            sale={product.sale}
            picture={product.picture}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
