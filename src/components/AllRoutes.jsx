import { Routes,Route } from "react-router-dom"
import Cart from "../pages/cart";
import Home from "../pages/home";
import Kids from "../pages/kids";
import Men from "../pages/men";
import Offers from "../pages/offers";
import Profile from "../pages/profile";
import ScerapBook from "../pages/scrapbook";
import Search from "../pages/search";
import Women from "../pages/women";


const AllRoutes = () => {
    return <>
      <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/kids" element={<Kids />} />
           <Route path="/men" element={<Men />} />
           <Route path="/women" element={<Women />} />
           <Route path="/offers" element={<Offers />} />
           <Route path="/scrapbook" element={<ScerapBook />} />
           <Route path="/search" element={<Search />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
}

export default AllRoutes;