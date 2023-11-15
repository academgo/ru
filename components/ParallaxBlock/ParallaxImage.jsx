import Image from 'next/image';
import styles from './ParallaxBlock.module.scss';

const ParallaxImage = ({ image, title }) => {
  return (
    <div className={styles.parallaxContainer}>
      <Image
        data-scroll data-scroll-speed="0.1"
        src={image}
        alt={title}
        fill
        objectFit="cover"
      />
      {/* Псевдоэлемент ::before для создания накладываемого фона */}
      <div
        data-scroll data-scroll-speed="0.1"
        className={styles.overlay}
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default ParallaxImage;
