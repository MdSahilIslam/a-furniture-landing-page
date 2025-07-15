import More from "../../components/More";

function Experience() {
  return (
    <section className="section-container my-10 grid grid-cols-1 md:grid-cols-2 justify-between items-center dark:bg-black dark:text-white">
      <div className="imge">
        <img
          src="./src/assets/expricences.png"
          alt="experience"
          className="h-full w-full"
        />
      </div>
      <div className=" w-[90%] md:w-10/12 mx-auto lg:mb-32">
        <h3 className="text-primary uppercase font-semi mb-4 bold text-lg">
          Experience
        </h3>
        <h2 className="text-4xl font-bold capitalize mb-4 ">
          we provide you <br />
          the best experience
        </h2>
        <p className="exp mb-4 text-secondary dark:text-white">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <div>
          <More more="More Info" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
