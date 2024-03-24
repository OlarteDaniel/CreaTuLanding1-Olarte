import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import PageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer titulo="PRODUCTOS"/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer titulo="PRODUCTOS"/>} />
            <Route path='/product/:productId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<h1>Carrito</h1>}/>
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
