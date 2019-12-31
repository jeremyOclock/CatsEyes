import React, { useEffect } from 'react';
import img from '../../assets/images/chat1.jpg';

import ScrollToTop from '../ScrollToTop';

import './resultsCats.scss';
import { Link } from 'react-router-dom';

const data: string[] = (() => {
  let result = [];
  for (let i = 0; i < 60; i++) result.push(img);
  return result;
})();

const ResultsCats = () => {
  const verifyScroll = () => {
    if (window.scrollY + window.innerHeight === document.body.clientHeight) {
      // TODO: get data for sec page
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', verifyScroll);

    return () => {
      window.removeEventListener('scroll', verifyScroll);
    };
  });

  return (
    <div className="avatars-cats">
      {data.map((currentImage, i) => (
        <section key={i} className="avatars-cats__container">
          <i
            className="avatars-cats__container__img"
            style={{ backgroundImage: `url(${currentImage})` }}
          />
          <span className="avatars-cats__container__score">Score: 25</span>
        </section>
      ))}
      <Link to="/" className="avatars-cats__back-to-home">
        <i className="fas fa-angle-double-left avatars-cats__back-to-home__icon"></i>
      </Link>
      <ScrollToTop />
    </div>
  );
};
export default ResultsCats;
