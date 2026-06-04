import moreImg from "../assets/button-icon.png";
function More({ more }) {
  return (
    <button className="flex gap-3 text-base font-primary text-primary">
      {more} <img src={`${moreImg}`} alt="" />
    </button>
  );
}

export default More;
