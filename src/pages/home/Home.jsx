import Product from "../shop/product";
import Experience from "./experience";
import Hero from "./hero";
import Material from "./material";
import Testimonial from "./testimonial";
import WhyChoose from "./WhyChoose";

function Home() {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <Product heading="Best Selling Product" />
      <Experience />
      <Material />
      <Testimonial />
    </div>
  );
}

export default Home;
