import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import {useState} from 'react'
import Cart from './components/Cart/Cart';
function App() {
  const [cartIsShow,setCartIsShow]=useState(false)
  const showCartHandler=()=>{setCartIsShow(true)}
  const closeCartHandler=()=>{setCartIsShow(false)}

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={closeCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
