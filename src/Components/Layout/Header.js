import './header.css';
import HeaderCartButton from './HeaderCartButton';
import foodPic from '../../Assets/foodPic.jpg'


const Header =(props)=>
{
    return(
<div className="header">
    <header className='banner'>
<h2 className='appName'>Food App</h2>
<HeaderCartButton />
    </header>
<div className="headerImg">

    <img src={foodPic} alt='foodImage' className='foodImage'/>
</div>
</div>
    )
}

export default Header;