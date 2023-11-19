import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartSliceActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch()

  const addItem = () => {
    dispatch(cartSliceActions.addToCart({
      id,
      title,
      quantity,
      total,
      price
    }))
  }

  const removeItem = () => {
    dispatch(cartSliceActions.removedFromCart(id))
  }


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem} >-</button>
          <button onClick={addItem} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
