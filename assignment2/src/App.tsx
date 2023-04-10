import { useState, useEffect } from 'react'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import UserLayout from './components/layout/userLayout'
import Home from './pages/home'
import ProductDetail from './pages/product'
import Signup from './pages/signup'
import Signin from './pages/signin'
import AdminLayout from './components/layout/admin'
import Dashboard from './pages/dashboard'
import ProductUpdate from './pages/product-update'
import UserProduct from './components/layout/userProduct'
import { getAll, deleteProducts } from './api/products'
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then((response) => {
    setProducts(response.data.docs);
  });
  }, []);
  const onHandleRemove = (id: string|number) => {
    deleteProducts(id).then(() => {
      setProducts(products.filter((item) => item.id !== id));
      // window.location.reload();
    });
  };
  // const onHandleAdd = (product:IProduct) => {
  //   addProduct(product).then((data) => {
  //     console.log(data);
  //     getProducts().then(({data}) => setProducts(data))
  //   });
  // };
  
  // const onHandleUpdate = (product:IProduct) => { 
  //   updateProduct(product).then(() => {
  //     setProducts(products.map((item) => (item.id === product.id ? product : item)));
  //   });
  // };
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/' element={<UserLayout/>}> 
        <Route index element={<Home/>}/>
      </Route>
      <Route path='/' element={<UserProduct/>}>
        <Route path='product/:id' element={<ProductDetail/>}/>
      </Route>
      <Route path='/admin' element={<AdminLayout/>}>
      <Route index element={<Dashboard onRemove={onHandleRemove} products={products}/>}></Route>
        <Route path='product/:id' element={<ProductUpdate/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
