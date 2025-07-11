const Products = () => {
    return (
        <section className="products">
            <h2>Produtos</h2>
            <div id="products" className="products-container">
                <div className="products-header">
                    <nav className="products-menu">
                        <ul className="products-menu-list">
                            <li><button className="products-menu-item">Todos</button></li>
                            <li><button className="products-menu-item">Eletrônicos</button></li>
                            <li><button className="products-menu-item">Acessórios</button></li>
                            <li><button className="products-menu-item">Promoções</button></li>
                            <li><button className="products-menu-item">Novidades</button></li>
                            <li><button className="products-menu-item">Mais Vendidos</button></li>
                        </ul>
                    </nav>
                    <div className="products-menu-actions">
                        <button className="products-menu-button">Ordenar por</button>
                        <button className="products-menu-button">Filtrar</button>
                        <input className="products-menu-input" type="text" placeholder="Pesquisar..." />
                    </div>
                </div>
                <div className="products-list">
                    {/* Renderize seus cards de produtos aqui */}
                    <div className="products-card">
                        <img src="https://via.placeholder.com/150" alt="Produto 1" />
                        <h3>Produto 1</h3>
                        <p>R$ 100,00</p>
                    </div>
                    <div className="products-card">
                        <img src="https://via.placeholder.com/150" alt="Produto 2" />
                        <h3>Produto 2</h3>
                        <p>R$ 200,00</p>
                    </div>
                    {/* Adicione mais cards conforme necessário */}
                </div>
            </div>
        </section>
    );
}

export default Products;