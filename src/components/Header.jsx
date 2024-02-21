import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/logo.png"

export  const Header = () => {


  return (
    <header className="flex align-middle">
      <Link to="/" className="logo">
        <img src={Logo} alt="" />
        <p>Shopping Cart</p>
       </Link>
     
      <nav className="navigation ">
       
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="cart" className="link">Cart</NavLink>
      
      </nav>


      <Link to="cart" className="items">Cart 2</Link>
    </header>
  )
}


