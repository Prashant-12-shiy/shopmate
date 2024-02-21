import { Card } from "../components"
import { useTitle } from "../hooks/useTitle"

export  const CardList = ({title}) => {
   const products = [
    {id: 1001, "name": "Product 1", "price": 149, "image": "/assets/images/1001.png",}, 
    {id: 1002, "name": "Product 2", "price": 49, "image": "/assets/images/1002.png",}, 
    {id: 1003, "name": "Product 3", "price": 179, "image": "/assets/images/1003.png",}, 
    {id: 1004, "name": "Product 4", "price": 39, "image": "/assets/images/1004.png",}, 
    {id: 1005, "name": "Product 5", "price": 199, "image": "/assets/images/1005.png",}, 
    {id: 1006, "name": "Product 6", "price": 29, "image": "/assets/images/1006.png"}
   ]
  
  useTitle("Home")
  return (
    <section className="products">
      {products.map((product) => (
         <Card key={product.id} product={product}/>
      ))}
     
    </section>
  )
}

