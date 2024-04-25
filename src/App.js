import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import PageNotFound from './components/pageNotFound/PageNotFound';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer titulo="PRODUCTOS"/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer titulo="PRODUCTOS"/>} />
              <Route path='/product/:productId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}></Route>
              <Route path='*' element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
