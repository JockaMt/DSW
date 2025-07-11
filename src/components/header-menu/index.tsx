import '../styles.css'

const HeaderMenu = () => {
    return (
        <nav className="header-menu">
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#products">Produtos</a></li>
                <li><a href="/about">Sobre</a></li>
                <li><a href="/contact">Contatos</a></li>
            </ul>
        </nav>
    );
}

export default HeaderMenu;