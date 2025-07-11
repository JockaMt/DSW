import ProductsCard from "../../components/products-card";

const ProductsPage = () => {
    const data = [
        { id: 1, imageUrl: "https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg", name: 'Product 1 asd asd asdq we qwe qweasd asd asd qwe qwe qew iouasd798 897 asd897 das89d a7s9das ', price: '10' },
        { id: 2, imageUrl: "https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg", name: 'Product 2', price: '20' },
        { id: 2, imageUrl: "https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg", name: 'Product 2', price: '20' },
        { id: 2, imageUrl: "https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg", name: 'Product 2', price: '20' },
        { id: 2, imageUrl: "https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg", name: 'Product 2', price: '20' },
        { id: 2, imageUrl: "https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg", name: 'Product 2', price: '20' },
        { id: 2, imageUrl: "https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg", name: 'Product 2', price: '20' },
        { id: 2, imageUrl: "https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg", name: 'Product 2', price: '20' },
        { id: 2, imageUrl: "https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg", name: 'Product 2', price: '20' },
        { id: 2, imageUrl: "https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg", name: 'Product 2', price: '20' },
        { id: 3, imageUrl: "https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg", name: 'Product 3', price: '30' }
    ];
    return (
        <div className="products-page">
            <section className="products-background">
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
                    <div className="products-page-list">
                        {data.map(product => (
                            <ProductsCard
                                key={product.id}
                                id={product.id}
                                imageUrl={product.imageUrl}
                                name={product.name}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductsPage;