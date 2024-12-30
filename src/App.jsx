import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import AddForm from './components/AddForm/AddForm'
import Category from "./components/Category/Category"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import Categories from "./components/CategoryList/Categories"
import ProductDetails from "./components/ProductDetails/ProductDetails"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/category/:name" element={<Categories />}></Route>
        <Route path="/addform" element={<AddForm />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App