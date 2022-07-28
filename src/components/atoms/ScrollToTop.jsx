/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import UpArrow from '../../assets/svgs/UpArrow';

const ScrollToTop = () => {
  const [ScrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const scrollup = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      {ScrollTop && (
        <button type="button" onClick={scrollup}>
          <UpArrow className="fixed bottom-8 right-5 " />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
