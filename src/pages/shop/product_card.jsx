import getUrl from "../../utils/getImgUrl";
import Rating from "./rating";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { furniture_store } from "../../store/store";

function ProductCard({ product }) {
  const { handleSetPopup, addInCart } = useContext(furniture_store);

  return (
    <div className="hover:shadow-xl ">
      <div className="bg-[#f7f7f7]">
        <img
          src={getUrl(product.imageUrl)}
          alt="img"
          className="aspect-square"
        />
      </div>
      <div className="product-card-info p-6 bg-white dark:bg-gray-600 shadow-md">
        <h4 className="text-base mb-1">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className="mt-5 flex justify-between items-center">
          <p className="text-secondary dark:text-white font-bold text-lg">
            <sup>$</sup>
            <span>{product.price}</span>
          </p>
          <button
            className="bg-secondary text-white p-1.5 sm:p-2 rounded-full text-lg hover:bg-black/65"
            onClick={() => {
              handleSetPopup(product);
              addInCart(product);
            }}
          >
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
