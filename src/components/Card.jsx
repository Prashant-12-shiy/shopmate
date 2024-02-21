
export  const Card = ({product}) => {
  const {name, price, image} = product;

  return (
    
      <div  className="product">   
              <img className="rounded-t-lg" src={image} alt={name} />
            
             <p className="name">{name}</p>
              <div className="action">
                  <p>
                    ${price}</p>
                  <button>Add to cart</button>
              </div>
          </div>

  )
}
    
