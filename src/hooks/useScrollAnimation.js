import { useEffect, useRef } from 'react';
import { useMotionTemplate, useMotionValue, animate } from 'framer-motion';

export const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};

export const useGradientAnimation = () => {
  const angle = useMotionValue(0);

  useEffect(() => {
    const controls = animate(angle, 360, {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    });

    return () => controls.stop();
  }, [angle]);

  return angle;
};