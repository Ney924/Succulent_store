import s from "./Products.module.scss";
import { products } from "./constants";
export function Products() {

  return (
    <div className={s.root}>
      {products.map((product, i) => (
        <div className={s.product} key={i}>
          {product.sale > 0 &&  <div className={s.sale}>{product.sale}</div>}
         
          <img className={s.img} src={product.picture}/>
          <div className={s.name}>{product.name}</div>
          <div className={s.price}>{product.price}₽</div>
        </div>
      ))}
    </div>
  );
}
