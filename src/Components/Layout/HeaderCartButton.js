import './headerCardButton.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton =(props)=>
{
  return(
    <button className='headerCartButton'>
        <span className='cartIcon'>
<CartIcon />
        </span>

        <span className='foodName'>
        Your Cart
        </span>

        <span className='foodCount'>
3

        </span>
    </button>
  )
}

export default HeaderCartButton;