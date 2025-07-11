import { LiaSearchSolid } from 'react-icons/lia';
import '../styles.css'
import { RiAccountCircleFill } from 'react-icons/ri';
import { FaCartShopping } from 'react-icons/fa6';
import logo from "../../../public/logo-white.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img className="header-logo" src={logo} alt="" />
        <div className="header-input">
          <input type="text" placeholder="Procurar..." />
          <button className='header-search-button' type="submit"><LiaSearchSolid/></button>
        </div>
        <nav className='header-nav'>
          <ul>
            <li><a className="header-button" href="#"><FaCartShopping size={21}/></a></li>
            <li><a className="header-button" href="#"><RiAccountCircleFill size={24}/></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;