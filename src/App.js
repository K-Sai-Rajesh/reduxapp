import {Provider} from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from './Component/Cart/Cart';
import { Home } from './Component/Home/Home';
import { Navbar } from './Component/Navbar/Navbar';
import { store } from './ReduxState/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
