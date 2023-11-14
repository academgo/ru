'use client';
import React, { useEffect, useRef } from 'react'
import styles from "./SliderImages.module.scss";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export const SliderImages = ({ slides }) => {

  // const blockRef = useRef(null);

  // useEffect(() => {
  //   const blockElements = document.querySelectorAll(`.${styles.slideItemContent}`);
  //   const maxHeight = Math.max(...Array.from(blockElements, (el) => el.clientHeight));
  //   Array.from(blockElements, (el) => (el.style.height = `${maxHeight}px`));
  // }, []);

  return (
    <div className={styles.sliderContent}>
      <div className="container">
        <Swiper
          className={styles.slider}
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={30}
          grabCursor={true}
          // slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 3500,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        // loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.title}
            >
              <div className={styles.slideItem}>
                <div className={styles.slideItemImg}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={300}
                    height={300}
                    className={styles.image}
                  />
                </div>
                <div className={styles.slideItemContent}>
                  <h3 className={styles.title}>{slide.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}
