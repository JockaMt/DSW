interface IProductsCardProps {
    id: number;
    imageUrl: string;
    name: string;
    price: string;
}

const ProductsCard = (props: IProductsCardProps) => {
    return (
        <div key={props.id} className="products-page-card">
            <img src={props.imageUrl || "https://via.placeholder.com/150"} alt={props.name} />
            <h3>{props.name}</h3>
            <p>R$ {props.price}</p>
        </div>
    );
}

export default ProductsCard;