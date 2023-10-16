import React from 'react'
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

  return (
    <div className={styles.sliderContent}>
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          grabCursor={true}
          // pagination={{ clickable: true }}
          navigation={{
            nextEl: '.customButtonPrev',
            prevEl: '.customButtonPrev',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
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
          loop={true}
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
                    width={500}
                    height={500}
                    className={styles.image}
                  />
                </div>
                <div className={styles.slideItemContent}>
                  <p className={styles.pretitle}>{slide.pretitle}</p>
                  <h3 className={styles.title}>{slide.title}</h3>
                  <p style={{ color: slide.descriptionColor }} className={styles.description}>{slide.description}</p>
                  {slide.iconTime && <div className={styles.icon}><AiFillClockCircle fontSize="1.3rem" color="#ffa800" /> {slide.iconTime}</div>}
                  {slide.iconCost && <div className={styles.icon}><AiFillEuroCircle fontSize="1.3rem" color="#ffa800" /> from {slide.iconCost}€/Year</div>}
                  {slide.costBig && <p className={styles.costBig}>from {slide.costBig}€/Year</p>}
                </div>
                {<Popup /> && <Popup label='learn more' />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
        <button className="customButtonPrev">
          <FaChevronLeft color="#fff" fontSize="1.5em" />
        </button>
        <button className="customButtonNext">
          <FaChevronRight color="#fff" fontSize="1.5em" />
        </button>
      </div>
    </div>
  )
}
