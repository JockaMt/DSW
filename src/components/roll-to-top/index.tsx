import { IoIosArrowUp } from "react-icons/io";

const RollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="roll-to-top" onClick={scrollToTop}>
      <IoIosArrowUp className="roll-to-top-icon" size={30}/>
    </button>
  );
}

export default RollToTop;