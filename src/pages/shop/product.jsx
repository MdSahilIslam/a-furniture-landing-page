import { useContext, useState } from "react";
import ProductCard from "./product_card";
import More from "../../components/More";
import { furniture_store } from "../../store/store";

function Product({ heading}) {
  const {products} = useContext(furniture_store)
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selCat, setSelCat] = useState("Chair");
  const [visibleProduct, setVisibleProduct] = useState(4);

  const filterProduct = products.filter((item) => item.category === selCat);

  const handleVisiblepRoduct = (preview) => {
    setVisibleProduct(preview + 4);
  };

  
  return (
    <div>
      <div className="section-container  dark:bg-black dark:text-white">
        <h1 className="text-4xl font-bold text-center my-8">{heading}</h1>

        {/*catogory division*/}
        <div className="bg-[#EEEEEE] px-2 max-w-md mx-auto rounded-3xl sm:rounded-full md:p-2.5 py-5  mb-3 dark:text-black">
          <div className=" grid grid-cols-2 sm:flex sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category, i) => {
              return (
                <button
                  key={i}
                  className={`py-1.5 px-8 sm:px-5 rounded-full hover:bg-primary hover:text-white transition-colors ${
                    selCat === category ? " text-primary bg-white" : ""
                  }`}
                  onClick={() => {
                    setSelCat(category)
                    setVisibleProduct(4)
                }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/*Product Grid*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filterProduct.slice(0, visibleProduct).map((product, index) => {
            return <ProductCard key={index} product={product}/>;
          })}
        </div>

        {/*More Products*/}
        {visibleProduct < filterProduct.length ? <div onClick={() => {
              handleVisiblepRoduct(visibleProduct);
            }} 
            className="flex justify-center p-5">
          <More more={"View More"}/>
        </div> : null}
      </div>
    </div>
  );
}

export default Product;
