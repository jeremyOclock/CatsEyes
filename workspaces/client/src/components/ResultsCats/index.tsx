import React, { useEffect, useCallback, useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import ScrollToTop from '../ScrollToTop';
import './resultsCats.scss';
import { Link } from 'react-router-dom';
import { useSelector } from '../../hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/actions/feature/resultscats';
import { ICat } from '@workspaces/api/src/models/Cat';

const Cards: React.FC<{ cats: ICat[] }> = ({ cats }) => {
  const transitions = useTransition(cats, cat => cat._id, {
    unique: true,
    trail: 50,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  });

  return (
    <>
      {transitions.map(({ item, key, props }) => (
        <animated.section
          className="avatars-cats__container"
          key={key}
          style={props}
        >
          <i
            className="avatars-cats__container__img"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <span className="avatars-cats__container__score">
            Score: {item.score}
          </span>
        </animated.section>
      ))}
    </>
  );
};

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
      {cats && <Cards cats={cats} />}
      <Link to="/" className="avatars-cats__back-to-home">
        <i className="fas fa-angle-double-left avatars-cats__back-to-home__icon"></i>
      </Link>
      <ScrollToTop />
    </div>
  );
};
export default ResultsCats;
