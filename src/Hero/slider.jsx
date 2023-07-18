import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import SwiperCore from "swiper";
// import {SiReactrouter,SiSwiper} from react-icons/si
// import { FaReact } from react - icons / fa



function Slider() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="slider">
      <header>
        <h1>Technologies Used</h1>
      </header>
          <div className="mySwiper">
                 <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 1000 }}
        loop={true}
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
      </Swiper>
   </div>
    </div>
  );
}

export default Slider;
