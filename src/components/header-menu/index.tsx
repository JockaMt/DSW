import { useLocation } from 'react-router-dom'
import '../styles.css'

const HeaderMenu = () => {
    const home = useLocation().pathname === '/' ? '#' : "/";
    const products = useLocation().pathname === '/products' ? '#' : "/products";
    return (
        <nav className="header-menu">
            <ul>
                <li><a href={home}>Início</a></li>
                <li><a href={products}>Produtos</a></li>
                <li><a href="/about">Sobre</a></li>
                <li><a href="/contact">Contatos</a></li>
            </ul>
        </nav>
    );
}

export default HeaderMenu;