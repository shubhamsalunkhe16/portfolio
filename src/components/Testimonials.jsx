import SectionHeader from "./SectionHeader";
import userMeta from "../constants/userMeta";
import TestimonialCard from "./TestimonialCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const { testimonials } = userMeta;
  return (
    <section id="testimonials" data-aos="fade-up">
      <SectionHeader title="Testimonials" className={"text-left"} />
      {/* <Swiper
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper> */}
      <div class="flex flex-col sm:grid sm:grid-flow-col sm:grid-rows-subgrid gap-4 sm:gap-8">
        <div class="row-span-3">
          <TestimonialCard testimonial={testimonials[0]} />
        </div>
        <div class="col-span-1 xl:col-span-2">
          <TestimonialCard testimonial={testimonials[1]} />
        </div>
        <div class="col-span-1 xl:col-span-2 row-span-2">
          <TestimonialCard testimonial={testimonials[2]} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
