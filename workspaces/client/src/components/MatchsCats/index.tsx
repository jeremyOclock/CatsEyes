import React, { useEffect } from 'react';

import './matchsCats.scss';
import { Link } from 'react-router-dom';
import { useSelector } from '../../hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchData, vote } from '../../redux/actions/feature/matchscats';
import CardCat from '../CardCat';

const MatchsCats: React.FC = () => {
  const { cats } = useSelector(state => state.matchsCats);
  const dispatch = useDispatch();

  const handleVote = (id: string) => () => {
    dispatch(vote(id));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return cats ? (
    <div className="matchs-cats">
      <section className="matchs-cats__card-left">
        <CardCat cat={cats[0]} onClick={handleVote(cats[0]._id)} />
      </section>

      <h2 className="matchs-cats__title">Who's the cutest?</h2>

      <section className="matchs-cats__card-right">
        <CardCat cat={cats[1]} onClick={handleVote(cats[1]._id)} />
      </section>

      <footer className="matchs-cats__footer">
        <Link to="/results" className="matchs-cats__footer__button">
          <i className="fas fa-list matchs-cats__footer__button__icon"></i>
        </Link>
      </footer>
    </div>
  ) : (
    <>loading</>
  );
};

export default MatchsCats;
