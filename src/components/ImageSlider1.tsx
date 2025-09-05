import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import imgg1 from "@/assets/imgg1.jpg";
import imgg2 from "@/assets/imgg2.jpg";
import imgg3 from "@/assets/imgg3.jpg";
import imgg4 from "@/assets/imgg4.jpg";
import imgg5 from "@/assets/imgg5.jpg";
import imgg6 from "@/assets/imgg6.jpg";
import imgg7 from "@/assets/imgg7.jpg";
import imgg8 from "@/assets/imgg8.jpg";
import imgg9 from "@/assets/imgg9.jpg";
import imgg10 from "@/assets/imgg10.jpg";
import imgg11 from "@/assets/imgg11.jpg";
import imgg12 from "@/assets/imgg12.jpg";
import imgg13 from "@/assets/imgg13.jpg";
import imgg14 from "@/assets/imgg14.jpg";
import imgg15 from "@/assets/imgg15.jpg";
import imgg16 from "@/assets/imgg16.jpg";
import imgg17 from "@/assets/imgg17.jpg";

const images = [imgg1, imgg2, imgg3, imgg4, imgg5, imgg6, imgg7, imgg8, imgg9, imgg10, imgg11, imgg12, imgg13, imgg14, imgg15, imgg16, imgg17];

const ImageSlider1 = () => {
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
        {images.map((imgg, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={imgg}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider1;
