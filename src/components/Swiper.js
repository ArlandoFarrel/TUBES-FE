// // Import Swiper React components
// import { Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//     SwiperCore.use([Autoplay])
    
//   return (
//     <>
//     <Swiper
//     modules={[Navigation, Pagination]}
//     navigation
//     pagination={{ clickable: true }}
//       autoplay={{ delay: 4000 }}
//       spaceBetween={50}
//       slidesPerView={1}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide><img src="ASSETS/img/farrel.JPG" alt=""/></SwiperSlide>
//       <SwiperSlide><img src="ASSETS/img/zalfa.JPG" alt=""/></SwiperSlide>
//       <SwiperSlide><img src="ASSETS/img/grisel.JPG" alt=""/></SwiperSlide>
//       <SwiperSlide><img src="ASSETS/img/dila.JPG" alt=""/></SwiperSlide>

//       ...
//     </Swiper>

//     </>
//   );
// };

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 4000,
                  disableOnInteraction: false  
                }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="/ASSETS/img/farrel.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img src="/ASSETS/img/zalfa.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img src="/ASSETS/img/grisel.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img src="/ASSETS/img/dila.jpg" alt=""/></SwiperSlide>
      ...
    </Swiper>
  );
};