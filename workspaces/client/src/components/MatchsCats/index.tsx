import React from 'react';

import './matchsCats.scss';
import { Link } from 'react-router-dom';

import img1 from '../../assets/images/chat1.jpg';
import img2 from '../../assets/images/chat2.jpg';

const MatchsCats: React.FC = () => (
  <div className="matchs-cats">
    <section className="matchs-cats__card-left">
      <i
        className="matchs-cats__card-left__img"
        style={{ backgroundImage: `url(${img1})` }}
      />
    </section>

    <h2 className="matchs-cats__title">Who's the cutest?</h2>

    <section className="matchs-cats__card-right">
      <i
        className="matchs-cats__card-right__img"
        style={{ backgroundImage: `url(${img2})` }}
      />
    </section>

    <footer className="matchs-cats__footer">
      <Link to="/results" className="matchs-cats__footer__button">
        <i className="fas fa-list matchs-cats__footer__button__icon"></i>
      </Link>
    </footer>
  </div>
);

export default MatchsCats;
