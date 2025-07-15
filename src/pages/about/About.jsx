import Experience from "../home/experience";
import WhyChoose from "../home/WhyChoose";

function About() {
  return (
    <section className=" min-h-screen">
      <div
        className="w-full h-[400px] bg-cover bg-top text-center flex items-center justify-center"
        style={{ backgroundImage: "url(./src/assets/about-background.jpg)" }}
      >
        <h1 className="text-black/50 text-6xl font-bold">About Us</h1>
      </div>
      <WhyChoose />
      <Experience />
    </section>
  );
}

export default About;
