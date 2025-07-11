import bgSponsor from '../../../public/bg-sponsor.png';
import fillImg from '../../../public/fill.webp';

const Sponsor = () => {
    return (
        <div className="landing-image">
            <img className="sponsor-img" src={fillImg} alt="" />
            <img className="landing-image" src={bgSponsor} alt="Banner de Destaque da TrickTech" />
        </div>
    )
}

export default Sponsor;