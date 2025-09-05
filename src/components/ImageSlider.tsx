import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ImageSlider = () => {
  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto my-12 rounded-2xl overflow-hidden shadow-elegant">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="aspect-square w-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
