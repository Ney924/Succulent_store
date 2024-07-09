import s from "./Products.module.scss"

interface IProduct {
  sale: number
  picture: string
  name: string
  price: number
}
export function Product(product: IProduct) {
  return (
    <div className={s.root}>
      {product.sale > 0 && <div className={s.sale}>{product.sale}</div>}

      <img className={s.img} src={product.picture} />
      <div className={s.name}>{product.name}</div>
      <div className={s.price}>{product.price}₽</div>
    </div>
  )
}
