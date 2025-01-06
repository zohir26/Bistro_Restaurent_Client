// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// import images
import slide1 from '../asset/home/slide1.jpg';
import slide2 from '../asset/home/slide2.jpg';
import slide3 from '../asset/home/slide3.jpg';
import slide4 from '../asset/home/slide4.jpg';
import slide5 from '../asset/home/slide5.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      loop = {true}
      autoplay={{ delay: 3000}}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide3} alt="" />
      </SwiperSlide>
      <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
      
      <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
    </Swiper>
  );
};