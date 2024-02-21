import {Routes, Route} from "react-router-dom";
import { CardList, Cart } from "../pages";

export const AllRoutes = () => {
  return (
   <div>
    <Routes>
     <Route path="/" element={<CardList/>}  />
     <Route path="cart" element={<Cart />}  />
    </Routes>
   </div>
    
  )
}


