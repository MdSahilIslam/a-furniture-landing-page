import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";

function Rating({ rating }) {
  const ary = Array.from({ length: 5 }, (_, i) => {
    return rating >= i + 1 ? (
      <RiStarSFill key={i} className="text-yellow-500" />
    ) : (
      <RiStarSLine key={i} className="text-gray-400" />
    );
  });

  return <div className="flex text-xl space-x-1">{ary}</div>;
}

export default Rating;
