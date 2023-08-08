import '../css/cart_item.css';
import { RiDeleteBin6Line as CartDeleteButton } from 'react-icons/ri'
import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';

const CartItem = ({ cartItem }) => { 

  const navigate=useNavigate()

  const {cart, setCart, updateCartItemQuantity, deleteCartItems } = useContext(CartContext)
  const [totalPrice, setTotalPrice] = useState(cartItem.book.price)
  const [quantity, setQuantity] = useState(cartItem.quantity)

  useEffect(() => {
    setTotalPrice(cartItem.book.price * quantity);
  }, [quantity]);

  const showProductDetails=()=>{

    navigate("/productDetailsPage", { state: cartItem.book })
  }


  const plusButtonHandler = () => {
    setQuantity(quantity + 1)
    updateCartItemQuantity(cartItem,quantity+1)
    console.log(cart)
  }

  const minusButtonHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateCartItemQuantity(cartItem,quantity-1)
    }
  }

  const cartRemoveHandler = () => {
    deleteCartItems([cartItem])
  };

  return (
    <>
      <div className="cart-item">
        <div className="product-image" onClick={showProductDetails}>
          <img src={cartItem.book.imageURL} alt="Product Image" />
        </div>

        <div className="book-details">
          <h3 className="book-title">{cartItem.book.title}</h3>
          <a className="book-author">{cartItem.book.author}</a>
        </div>

        <div className="quantity-control">
          <button className="quantity-btn minus" onClick={minusButtonHandler}>
            -
          </button>
          <input type="number" className="quantity-input" value={quantity} readOnly />
          <button className="quantity-btn plus" onClick={plusButtonHandler}>
            +
          </button>
        </div>

        <div className="price">{totalPrice.toFixed(2)} ₹</div>
        <CartDeleteButton className="remove-btn" onClick={cartRemoveHandler} />
      </div>
    </>
  );
};

export default CartItem;
