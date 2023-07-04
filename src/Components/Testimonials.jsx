import styles from "./Testimonials.module.css";

// Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TestimonialItem from "./TestimonialItem";
//

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles["title"]}>Comentarios de nuestros clientes</h2>
      <div className={styles["testimonial-items"]}>
        <Swiper
          className={styles["swiper"]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1110: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          style={{
            "--swiper-navigation-color": "#2bdcf2",
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          // pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <TestimonialItem />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
