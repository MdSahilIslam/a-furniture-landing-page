import More from "../../components/More";

function WhyChoose() {
  return (
    <section className=" section-container dark:bg-black dark:text-white">
      <div className="my-16 mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-left">
        <div>
          <h1 className="font-bold text-4xl">
            Why <br /> choosing Us
          </h1>
        </div>
        <div className=" ">
          <h2 className="text-2xl font-semibold mb-3">Luxury facilities</h2>
          <p className="text-base mb-2">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
          <More more={"More Info"} />
        </div>
        <div className=" ">
          <h2 className="text-2xl font-semibold mb-3">Affordable Price</h2>
          <p className="text-base mb-2">
            You can get a workspace of the highst quality at an affordable price
            and still enjoy the facilities that are oly here.
          </p>
          <More more={"More Info"} />
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold mb-3">Many Choices</h2>
          <p className="text-base mb-2">
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </p>
          <More more={"More Info"} />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
