import { Routes, Route } from 'react-router-dom'
import Ecommerce from './filteredShoppingCart/Ecommerce.jsx'
import ProductsDetail from './filteredShoppingCart/ProductsDetail.jsx'




const App = () => {

  return (
    
    <>
      <Routes>
        <Route path = "/" element = {<Ecommerce/>}/>
        <Route path = "/ecommerce" element = {<Ecommerce/>}/>
        <Route path = "/ecommerce/:id" element = {<ProductsDetail/>}/>
      </Routes>
    </>
  )
}

export default App
