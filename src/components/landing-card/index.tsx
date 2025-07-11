import RatingStars from '../rating-stars'; // Certifique-se do caminho correto

interface ILandingCardProps {
    imageUrl: string;
    title: string;
    price: string;
    rating?: number; // Adicionamos a propriedade rating, opcional por enquanto
    numReviews?: number; // Número de avaliações (opcional)
}

const LandingCard = (props: ILandingCardProps) => {
    const { imageUrl, title, price, rating, numReviews } = props;

    return (
        <div className="product-card">
            <img className="landing-card-image" src={imageUrl} alt={title} />
            <div className="card-content">
                <h2>{title}</h2>
                {rating !== undefined && ( // Renderiza as estrelas apenas se a avaliação for fornecida
                    <div className="product-rating">
                        <RatingStars rating={rating} size="1.2em" /> {/* Use seu componente de estrelas aqui */}
                        {numReviews !== undefined && (
                            <span className="num-reviews">({numReviews})</span>
                        )}
                    </div>
                )}
                <p>R$ {price.trimEnd()}</p>
            </div>
        </div>
    );
};

export default LandingCard;