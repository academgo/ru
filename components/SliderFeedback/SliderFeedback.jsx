import React from 'react';
import styles from "./SliderFeedback.module.scss"
// import Swiper core and required modules
import { A11y, Autoplay, EffectFade, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip'

export const SliderFeedback = ({ slides }) => {

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[A11y, Autoplay, EffectFade, EffectFlip]}
          grabCursor={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          effect='flip'
          slidesPerView={1}

        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.name}
            >
              <div className={styles.slidItem}>
                {slide.name && (
                  <h3 className={styles.name}>
                    {slide.name}
                  </h3>
                )}
                {slide.review && (
                  <p className={styles.review}>
                    &quot;{slide.review}&quot;.
                  </p>
                )}
                <p className={styles.textBottom}>{slide.date}</p>
                <p className={styles.textBottom}>{slide.place}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};