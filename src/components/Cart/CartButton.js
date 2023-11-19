import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { showCartActions } from '../../store/show-cart';

const CartButton = (props) => {

  const dispatch = useDispatch()


  const toggleAction = () => {
    dispatch(showCartActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={toggleAction} >
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
