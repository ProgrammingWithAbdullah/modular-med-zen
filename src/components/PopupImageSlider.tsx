import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";

const PopupImageSlider = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

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

export default PopupImageSlider;
