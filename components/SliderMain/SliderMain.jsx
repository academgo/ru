"use client";
import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import {
  FaGraduationCap,
  FaPager,
  FaRegFileWord,
  FaRegIdCard,
  FaShippingFast,
  FaRegComments,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Link from 'next/link';
import styles from './SliderMain.module.scss';

const iconMap = {
  "FaGraduationCap": FaGraduationCap,
  "FaPager": FaPager,
  "FaRegFileWord": FaRegFileWord,
  "FaRegIdCard": FaRegIdCard,
  "FaShippingFast": FaShippingFast,
  "FaRegComments": FaRegComments,
  "FaChevronLeft": FaChevronLeft,
  "FaChevronRight": FaChevronRight
};

export const SliderMain = ({ slides }) => {
  return (
    <div className={styles.sliderWrapper}>
      <div className="container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          grabCursor={true}
          navigation={{
            nextEl: '.swiperButtonNext',
            prevEl: '.swiperButtonPrev',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          // slidesPerView={1}
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
          loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.title}
              style={{ backgroundColor: slide.background }}
              className={styles.slide}
            >
              <div className={styles.content}>
                {slide.icon && iconMap[slide.icon] && (
                  <div className={styles.icon}>
                    {React.createElement(iconMap[slide.icon], { color: "#fff", fontSize: "3em" })}
                  </div>
                )}
                <h3
                  className={styles.title}
                  style={{ color: slide.contentColor, fontSize: slide.titleSize }}
                >
                  {slide.title}
                </h3>
                <p
                  className={styles.text}
                  style={{ color: slide.contentColor, fontSize: slide.textSize }}
                >
                  {slide.text}
                </p>
              </div>
              <div className={styles.button}>
                <Link
                  style={{ backgroundColor: slide.buttonBg, color: slide.buttonLabelColor }}
                  className={styles.slideLink}
                  href={slide.buttonDestination}
                >
                  <span>{slide.buttonLabel}</span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiperButtonPrev">
          <FaChevronLeft color="#fff" fontSize="1.5em" />
        </button>
        <button className="swiperButtonNext">
          <FaChevronRight color="#fff" fontSize="1.5em" />
        </button>
      </div>
    </div>
  );
};