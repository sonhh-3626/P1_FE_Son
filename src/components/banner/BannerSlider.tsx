import { useState, useEffect, useCallback, memo } from 'react';
import Banner from '../user/Banner';
import { bannerSlides } from '../../data/bannerData';

import styles from './BannerSlider.module.css';

function BannerSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === bannerSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlideIndex(index);
  }, []);

  const currentSlide = bannerSlides[currentSlideIndex];

  return (
    <div className={styles.wrapper}>
      <Banner
        badgeText={currentSlide.badgeText}
        title={currentSlide.title}
        description={currentSlide.description}
        currentPrice={currentSlide.currentPrice}
        originalPrice={currentSlide.originalPrice}
        backgroundImage={currentSlide.backgroundImage}
      />

      <div className={styles.indicatorsContainer}>
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicatorButton} ${
              currentSlideIndex === index ? styles.active : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(BannerSlider);
