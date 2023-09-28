import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {Pagination, Navigation} from 'swiper/modules'

export default function Gallary() {
  return (
    <div className='tw-px-3'>
      <h2 className='tw-text-center tw-text-5xl md:tw-text-6xl tw-font-extrabold tw-text-custom-primary  tw-mb-16'>
        Gallery
      </h2>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        centeredSlides
      >
        {[
          '/media/custom/images/gallery-1.png',
          '/media/custom/images/gallery-2.png',
          '/media/custom/images/gallery-3.png',
          '/media/custom/images/gallery-4.png',
          '/media/custom/images/gallery-5.png',
          '/media/custom/images/gallery-1.png',
          '/media/custom/images/gallery-2.png',
          '/media/custom/images/gallery-3.png',
          '/media/custom/images/gallery-4.png',
          '/media/custom/images/gallery-5.png',
        ].map((img, index) => (
          <SwiperSlide key={index} className='h-100'>
            <img src={img} alt='' className=' tw-object-cover' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
