import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import premium1 from "@/assets/prem1.jpg";
import premium2 from "@/assets/prem2.jpg";
import premium3 from "@/assets/prem3.jpg";
import premium4 from "@/assets/prem4.jpg";
import premium5 from "@/assets/prem5.jpg";
import premium6 from "@/assets/prem6.jpg";

const PopupImageSlider2 = () => {
  const images = [premium1, premium2, premium3, premium4, premium5, premium6];

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto my-8 rounded-xl overflow-hidden shadow-md">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        speed={800}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="aspect-[4/3] w-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Hospital facility ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopupImageSlider2;
