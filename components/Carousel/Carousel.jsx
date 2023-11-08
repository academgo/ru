'use client';
import { getAspectRatio, getObjectFit } from 'utils/layout'
import React from 'react'
import styles from './Carousel.module.scss';
import Slider from 'react-infinite-logo-slider'
import Image from 'next/image';

export const Carousel = ({ slides }) => {
  return (
    <div className={styles.carousel}>
      {/* <div className="container"> */}
      <Slider
        width="300px"
        duration={30}
        spacing={0}
        pauseOnHover={true}
        blurBorders={true}
        blurBoderColor={'#032540'}
        className={styles.slider}
      >
        {slides.map((slide) => (
          <Slider.Slide
            key={slide.alt}
          >
            <div
              className={styles.slideContent}
            >
              {slide.image && (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={500}
                  height={500}
                  className={`${getAspectRatio(slide.aspectRatio)} ${getObjectFit(slide.objectFit)} ${styles.image}`}
                  style={{ backgroundColor: slide.background }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
          </Slider.Slide>
        ))}
      </Slider>
      {/* </div> */}
    </div>
  )
}
