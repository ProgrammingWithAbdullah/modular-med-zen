import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Picture1 from "@/assets/Picture1.jpg";
import Picture2 from "@/assets/Picture2.jpg";
import Picture3 from "@/assets/Picture3.jpg";
import Picture4 from "@/assets/Picture4.jpg";
import Picture5 from "@/assets/Picture5.jpg";
import Picture6 from "@/assets/Picture6.jpg";

const PopupImageSlider1 = () => {
  const images = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6];

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

export default PopupImageSlider1;
