import SectionHeader from "./SectionHeader";
import userMeta from "../constants/userMeta";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const { testimonials } = userMeta;
  return (
    <section id="testimonials" data-aos="fade-up">
      <SectionHeader title="Testimonials" className={"text-left"} />
      <div class="flex flex-col sm:grid sm:grid-flow-col sm:grid-rows-subgrid gap-4 sm:gap-8">
        <div class="row-span-3">
          <TestimonialCard testimonial={testimonials[0]} />
        </div>
        <div class="col-span-1">
          <TestimonialCard testimonial={testimonials[1]} />
        </div>
        <div class="col-span-1 row-span-2">
          <TestimonialCard testimonial={testimonials[2]} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
