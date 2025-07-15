import { useContext } from "react";
import { furniture_store } from "../../store/store";
import Rating from "../shop/rating";
import { RiDeleteBinLine } from "react-icons/ri";

function CartItem({ item }) {
  const { removeFromCart } = useContext(furniture_store);

  return (
    <div className=" mt-5 mx-5 bg-primary/10 p-3 border-2 rounded-2xl flex items-center justify-between  dark:text-white dark:bg-gray-700">
      <div
        className="w-[100px] md:w-[200px] h-[120px] md:h-[200px] md:ml-3 bg-cover bg-center text-center bg-primary/15 dark:bg-yellow-100 rounded-lg"
        style={{
          backgroundImage: `url(./src/assets/products/${item.imageUrl})`,
        }}
      ></div>

      <div className="w-1/2 ml-2 mr-3 md:mr-4 md:ml-[6px] lg:mr-5">
        <div>
          <h3 className="text-xl mb-3">{item.category}</h3>
          <h1 className="text-2xl font-semibold mb-3">{item.name}</h1>
          <div className="text-3xl mb-4">
            <Rating rating={item.rating} />
          </div>
          <div className="mx-4">
            <sup className="inline-block mr-[2px] text-sm">$</sup>
            <h2 className="inline-block mr-1 text-xl font-semibold">
              {item.price}
            </h2>
          </div>
        </div>
      </div>
      <div
        className="relative right-2 bottom-[75px] md:bottom-20 text-xl cursor-pointer hover:text-gray-600 dark:hover:text-white/55"
        onClick={() => {
          removeFromCart(item);
        }}
      >
        <RiDeleteBinLine />
      </div>
    </div>
  );
}

export default CartItem;
