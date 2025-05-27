import { useCallback } from 'react';

interface SmoothScrollOptions {
  duration?: number;
  offset?: number;
  easing?: (t: number) => number;
}

export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const {
    duration = 100, // 1.2 seconds for smooth animation
    offset = 60,     // Reduced offset for sticky navbar
    // Easing function for ultra-smooth animation (ease-in-out-cubic)
    easing = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  } = options;

  const scrollTo = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      console.warn(`Element with id "${targetId}" not found`);
      return;
    }

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    // Animation function using requestAnimationFrame for smooth 60fps animation
    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, [duration, offset, easing]);

  const scrollToSection = useCallback((href: string) => {
    const targetId = href.replace('#', '');
    scrollTo(targetId);
  }, [scrollTo]);

  return { scrollTo, scrollToSection };
};