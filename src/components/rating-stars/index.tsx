import React from 'react';
// Se você usa react-icons, importe assim:
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'; // Exemplo de ícones de estrela

interface IRatingStarsProps {
    rating: number; // A avaliação média do produto (ex: 4.5)
    maxRating?: number; // Avaliação máxima possível, padrão é 5
    size?: string; // Tamanho dos ícones (ex: '1em', '1.2em')
    color?: string; // Cor das estrelas
}

const RatingStars: React.FC<IRatingStarsProps> = ({
    rating,
    maxRating = 5,
    size = '1em',
    color = '#ffc107', // Cor padrão dourada para estrelas
}) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Estrelas cheias
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} style={{ color: color, fontSize: size }} />);
    }

    // Estrela de metade
    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" style={{ color: color, fontSize: size }} />);
    }

    // Estrelas vazias
    const emptyStars = maxRating - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} style={{ color: color, fontSize: size }} />);
    }

    return <div className="rating-stars">{stars}</div>;
};

export default RatingStars;