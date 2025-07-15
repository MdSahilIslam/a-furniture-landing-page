import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { reviews } from "../../utils/reviews.js";
import Rating from "../shop/rating.jsx";

function Testimonial() {
  return (
    <section className="section-container px-8">
      <div className="text-center mb-12">
        <h3 className="text-primary uppercase font-semi mb-5 bold text-lg">
          Testimonials
        </h3>
        <h2 className="text-4xl font-bold capitalize mb-5 ">
          Our Client Reviews
        </h2>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${review.coverImg})` }}
            className="bg-no-repeat bg-cover rounded-lg"
          >
            <div className="md:h-[506px] flex justify-center items-center mb-4">
              <div className="mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative dark:bg-black dark:text-white">
                <img
                  src={review.image}
                  alt=""
                  className="size-20 absolute -top-10 ring-2  ring-primary rounded-full object-cover left-1/2 -translate-x-1/2"
                />
                <div className="mt-16 text-center dark:text-white">
                  <h3 className="text-lg font-semibold ">{review.name}</h3>
                  <p className="mb-3 "> Verified Customer</p>
                  <p className="text-gray-500 mb-4">{review.review}</p>
                  <div className="mx-auto w-full flex justify-center items-center text-center mb-2">
                    <Rating rating={review.rating} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;
