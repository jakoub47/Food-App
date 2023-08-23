import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import {useState} from 'react'
function App() {
  const [cartIsShow,setCartIsShow]=useState(false)
  const showCartHandler=()=>{setCartIsShow(true)}
  const closeCartHandler=()=>{setCartIsShow(false)}

  return (
    <CartProvider>
      {cartIsShow && <p>cart is loading....</p>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
