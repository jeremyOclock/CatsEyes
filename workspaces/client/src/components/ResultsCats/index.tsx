import React, { useEffect, useCallback, useRef } from 'react';
import ScrollToTop from '../ScrollToTop';
import './resultsCats.scss';
import { Link } from 'react-router-dom';
import { useSelector } from '../../hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/actions/feature/resultscats';

const ResultsCats = () => {
  const { cats } = useSelector(state => state.resultsCats);
  const dispatch = useDispatch();

  const pageRef = useRef(1);

  const handleFetchData = useCallback(() => {
    dispatch(fetchData({ page: pageRef.current, limit: 25 }));
    pageRef.current++;
  }, [dispatch]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  // scroll
  const verifyScroll = () => {
    if (window.scrollY + window.innerHeight === document.body.clientHeight) {
      handleFetchData();
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
      {cats
        ? cats.map(({ score, image }, i) => (
            <section key={i} className="avatars-cats__container">
              <i
                className="avatars-cats__container__img"
                style={{ backgroundImage: `url(${image})` }}
              />
              <span className="avatars-cats__container__score">
                Score: {score}
              </span>
            </section>
          ))
        : null}
      <Link to="/" className="avatars-cats__back-to-home">
        <i className="fas fa-angle-double-left avatars-cats__back-to-home__icon"></i>
      </Link>
      <ScrollToTop />
    </div>
  );
};
export default ResultsCats;
