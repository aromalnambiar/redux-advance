import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { showCartActions } from '../../store/show-cart';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const totalCount = useSelector(state => state.cart.totalAmount)


  const toggleAction = () => {
    dispatch(showCartActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={toggleAction} >
      <span>My Cart</span>
      <span className={classes.badge}>{totalCount}</span>
    </button>
  );
};

export default CartButton;
