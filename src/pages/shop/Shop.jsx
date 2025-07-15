import Product from "./product";

function Shop() {
  return (
    <section className=" min-h-screen">
      <div
        className="w-full h-[400px] bg-cover bg-center text-center flex items-center justify-center"
        style={{ backgroundImage: "url(./src/assets/banner.png)" }}
      >
        <h1 className="text-white text-6xl font-bold">Shop Our Product</h1>
      </div>
      <Product heading="Shop Your Choice" />
    </section>
  );
}

export default Shop;
