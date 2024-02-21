import { CartCard } from "../components"
import { useTitle } from "../hooks/useTitle"

export  const Cart = ({title}) => {
  const products = [
    {id: 1, "name": "Product 1", "price": 149, "image": "/assets/images/1001.png",}, 
    {id: 2, "name": "Product 2", "price": 49, "image": "/assets/images/1002.png",},
  ];
 useTitle("cart")
  return (
    <section className="cart">
      <h1>Cart Items: {products.length}</h1>
      {products.map((product) => (
        <CartCard key={product.id} product = {product}/>
      ))}
   
    </section>
  )
}


