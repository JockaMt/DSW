import { LiaSearchSolid } from 'react-icons/lia';
import '../styles.css'
import { RiAccountCircleFill } from 'react-icons/ri';
import { FaCartShopping } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="header">
      <h1>TrickTech</h1>
      <div className="header-input">
        <input type="text" placeholder="Search..." />
        <button className='header-search-button' type="submit"><LiaSearchSolid/></button>
      </div>
      <nav className='header-nav'>
        <ul>
          <li><a className="header-button" href="#"><FaCartShopping size={21}/></a></li>
          <li><a className="header-button" href="#"><RiAccountCircleFill size={24}/></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;