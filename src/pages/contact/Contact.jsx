import Material from "../home/material";
import Testimonial from "../home/testimonial";

function Contact() {
  return (
    <section className=" min-h-screen">
      <div
        className="w-full h-[400px] bg-cover bg-center text-center flex items-center justify-center"
        style={{ backgroundImage: "url(./src/assets/contact-background.jpg)" }}
      >
        <h1 className="text-black/60 text-6xl font-bold">Contact Us</h1>
      </div>
      <Material />
      <Testimonial />
    </section>
  );
}

export default Contact;
