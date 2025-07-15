import More from "../../components/More";

function Material() {
  return (
    <section className="section-container my-10 flex flex-col md:flex-row items-center gap-4 md:mx-16  ">
      <div className=" w-[100%]  md:w-6/12 mx-auto lg:mb-32 dark:text-white">
        <h3 className="text-primary uppercase font-semi mb-5 bold text-lg">
          Materials
        </h3>
        <h2 className="text-4xl font-bold capitalize mb-5 ">
          Very serious <br /> materials for making <br />
          furniture
        </h2>
        <p className="exp mb-4 text-secondary dark:text-white">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <div>
          <More more="More Info" />
        </div>
      </div>
      {/* <div className="md:p-16">

      </div> */}

      <div className=" grid md:grid-cols-3 grid-cols-2  sm:items-end mt-8 items-center">
        <div>
          <img src="./src/assets/material-1.png" alt="experience" />
          <img
            src="./src/assets/material-2.png"
            alt="experience"
            className=""
          />
        </div>
        <div className="mb-20 md:col-span-2 col-span-1">
          <img src="./src/assets/material-3.png" alt="experience" />
        </div>
      </div>
    </section>
  );
}

export default Material;
