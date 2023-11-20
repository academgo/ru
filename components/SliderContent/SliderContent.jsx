'use client';
import React, { useEffect, useRef } from 'react'
import styles from "./SliderContent.module.scss";
import { FaRegClock, FaEuroSign, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { AiFillClockCircle, AiFillEuroCircle } from "react-icons/ai";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Popup } from 'components/Popup';

export const SliderContent = ({ slides }) => {

  const blockRef = useRef(null);

  useEffect(() => {
    const blockElements = document.querySelectorAll(`.${styles.slideItemContent}`);
    const maxHeight = Math.max(...Array.from(blockElements, (el) => el.clientHeight));
    Array.from(blockElements, (el) => (el.style.height = `${maxHeight}px`));
  }, []);

  return (
    <div className={styles.sliderContent}>
      <div className="container">
        <Swiper
          className={styles.slider}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          grabCursor={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          navigation={{
            nextEl: '.customButtonNext',
            prevEl: '.customButtonPrev',
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
              slidesPerView: 3.01,
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
                    width={200}
                    height={200}
                    className={styles.image}
                  />
                </div>
                <div ref={blockRef} className={styles.slideItemContent}>
                  <h3 className={styles.title}>{slide.title}</h3>
                  <p className={styles.pretitle}>{slide.pretitle}</p>
                  <p style={{ color: slide.descriptionColor }} className={styles.description}>{slide.description}</p>
                  {slide.iconTime && <div className={styles.icon}><AiFillClockCircle fontSize="1.3rem" color="#ffa800" /> {slide.iconTime}</div>}
                  {slide.iconCost && <div className={styles.icon}><AiFillEuroCircle fontSize="1.3rem" color="#ffa800" /> from {slide.iconCost}€/Year</div>}
                  {slide.costBig && <p className={styles.costBig}>from {slide.costBig}€/Year</p>}
                  <div className={styles.popupBlock}>
                    <Popup label='learn more' />
                  </div>
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
