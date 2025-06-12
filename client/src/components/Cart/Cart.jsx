import './Cart.css'
import Button from '../Button/Button'
import { totalPrice } from '../../units/totalprice'

function Cart({cartItems, onCheckout}) {
  return (
    <div className='cart-container'>
      <p>All price:{totalPrice(cartItems).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}</p>
      <Button title={`${cartItems.length === 0 ? 'Order' : 'Purchase'}`} onClick={onCheckout} type={'checkout'}/>
    </div>
  )
}

export default Cart
