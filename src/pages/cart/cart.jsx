import { useContext } from "react";
import CartItem from "./cart_item";
import { furniture_store } from "../../store/store";
import EmptyMsg from "./emtyMsg";

function Cart() {
  const { cartItemUpdate } = useContext(furniture_store);
  console.log(cartItemUpdate);
  return (
    <section className=" min-h-screen">
      <div
        className="w-full h-[250px] bg-cover bg-bottom text-center flex items-end justify-center "
        style={{
          backgroundImage: "url(./src/assets/cart_img5.webp)",
          opacity: "",
        }}
      >
        <h1 className="md:text-yellow-400/85 text-yellow-400/90 text-6xl font-bold mb-12 mx-3">
          Your Cart is Here
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-3 mb-4">
        {cartItemUpdate.length === 0 ? (
          <EmptyMsg />
        ) : (
          cartItemUpdate.map((itm, i) => <CartItem key={i} item={itm} />)
        )}
      </div>
    </section>
  );
}

export default Cart;
