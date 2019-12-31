import React, { useState, useEffect } from 'react';

import { useTransition, animated } from 'react-spring';

import './scrollToTop.scss';

const ScrollToTop: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  const scrollContainer = window;

  const updateScroll = () => {
    if (scrollContainer.scrollY > 150) return setScroll(true);
    return setScroll(false);
  };

  useEffect(() => {
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', updateScroll);
      }
    };
  });

  const scrollToTop = () => {
    scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonTransition = useTransition(scroll, null, {
    from: { opacity: 0 },
    enter: { opacity: 0.9 },
    leave: { opacity: 0 }
  });

  return (
    <>
      {buttonTransition.map(
        ({ item, key, props }: { item: boolean; key: string; props: object }) =>
          item ? (
            <animated.div
              onClick={scrollToTop}
              style={props}
              key={key}
              className={'scrollToTop'}
            >
              <i className="fas fa-arrow-up" />
            </animated.div>
          ) : null
      )}
    </>
  );
};
export default ScrollToTop;
