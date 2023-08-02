import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import {SiReactrouter,SiSwiper} from "react-icons/si"
import { FaReact,FaGithub } from "react-icons/fa"



function Slider() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="slider">
      <header>
        <h1>Technologies Used</h1>
      </header>
          <div className="mySwiper">
                 <Swiper
        spaceBetween={5}
        slidesPerView={3}
        autoplay={{ delay: 1000 }}
        loop={true}
      >
          <SwiperSlide>
            <div className="tool">
              <SiReactrouter />
            <a href="/">React-router</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tool">
                  <SiSwiper />
            <a href="/">Swiperjs</a>
        </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tool">
               <FaReact />
            <a href="/">React-Icons</a>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tool">
                      <FaGithub />
            <a href="/">Github</a>
    </div>
          </SwiperSlide>
      </Swiper>
   </div>
    </div>
  );
}

export default Slider;
