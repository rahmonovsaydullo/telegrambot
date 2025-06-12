import Card from './components/Card/Card';
import { getData } from './constants/db';
import './App.css';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';

const courses = getData();

//! Telegram
const telegram = window.Telegram.WebApp

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    telegram.ready()
  })

  const onAddItem = (item) => {
    const existItem = cartItems.find(c => c.id === item.id);

    if (existItem) {
      const product = cartItems.map(c =>
        c.id === item.id ? { ...existItem, quantity: existItem.quantity + 1 } : c
      );
      setCartItems(product);
    } else {
      const product = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(product);
    }
  };

  const onRemoveItem = (item) => {
    const existItem = cartItems.find(c => c.id === item.id);
    if (existItem.quantity === 1) {
      const product = cartItems.filter(c => c.id !== existItem.id);
      setCartItems(product);
    } else {
      const product = cartItems.map(c =>
        c.id === item.id ? { ...existItem, quantity: existItem.quantity - 1 } : c
      );
      setCartItems(product);
    }
  };

  const onCheckout = () =>{
    telegram.MainButton.text = 'Purchase'
    telegram.MainButton.show()
  }

  return (
    <>
      <h1>Courses</h1>
      <Cart cartItems={cartItems}  onCheckout={onCheckout}/>
      <div className="card-container">
        {courses.map((course) => (
          <Card
            key={course.id}
            course={course}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </>
  );
}

export default App;
