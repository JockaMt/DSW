import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import '../sections.styles.css';
import { useRef } from 'react';
import LandingCard from '../../components/landing-card';


const Landing = () => {
    const highlightsRef = useRef<HTMLDivElement | null>(null);

    const handleHighlightScroll = (direction: 0 | 1) => {
        const highlights = highlightsRef.current;
        if (highlights) {
            const scrollAmount = 780; // Você pode ajustar este valor se necessário
            highlights.scrollBy({
                left: direction === 0 ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };
    return (
        <section className="landing">
            <div className="intro">
                <h2>Bem-vindo ao TrickTech!</h2>
                <p>Descubra os produtos de tecnologia mais recentes com os melhores preços. Não perca nossas ofertas exclusivas!</p>
            </div>
            <div className="highlights">
                <button
                    onClick={() => handleHighlightScroll(0)}
                    className="landing-button"
                    aria-label="Rolar para a esquerda" // Adicionado para acessibilidade
                >
                    <IoIosArrowBack />
                </button>
                <div ref={highlightsRef} id='prd-preview' className="products-preview">
                    {/* Renderize seus LandingCards dinamicamente aqui, idealmente de uma array de produtos */}
                    <LandingCard rating={3} numReviews={231} imageUrl='https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0001.jpg' title='MONITOR GAMER 100Hz 27" CURVO ERAS' price='854.07'/>
                    <LandingCard rating={3} numReviews={56} imageUrl='https://www.bluecase.com.br/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/m/bmba320-g3hgu-m2_001.jpg' title='PLACA-MÃE BMBA320-G3HGU-M2' price='486.13'/>
                    <LandingCard rating={4.5} numReviews={81} imageUrl='https://www.bluecase.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/s/s/ssd-horizon-v2-m-2-pci-e_001.jpg' title='SSD HORIZON V2 M.2 2280 NVME' price='389.90'/>
                    <LandingCard rating={3.5} numReviews={149} imageUrl='https://www.bluecase.com.br/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/_/1_7.jpg' title='MONITOR 24" PRETO LED - 75HZ' price='458.06'/>
                </div>
                <button
                    onClick={() => handleHighlightScroll(1)}
                    className="landing-button"
                    aria-label="Rolar para a direita" // Adicionado para acessibilidade
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </section>
    );
}

export default Landing;