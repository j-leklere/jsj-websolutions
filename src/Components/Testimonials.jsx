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
    <section id="testimonials" className="testimonials">
      <h2 className="title">Comentarios de nuestros clientes</h2>
      <div className="testimonial-items">
        <Swiper
          className="swiper"
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
            <TestimonialItem
              texto="¡Felicitaciones por la página web creada! Es un medio ágil y actual para favorecer nuestra interacción, el conocimiento acerca de la institución y para convocar a nuevos integrantes."
              nombre="Graciela Adam"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              texto="Me sumo a la alegría y felicitaciones de tener la página web renovada, así como también el acceso abierto a nuestras publicaciones."
              nombre="Ernesto Pais"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              texto="Felicito y celebro este nuevo logro, y valoro mucho que sea de eso acceso abierto: la información y el conocimiento cobran valor solo si son compartidos."
              nombre="Norma Contini"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              texto="Muy amigable y clara la pagina, va a ser sumamente útil."
              nombre="Delia Sorbero"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
