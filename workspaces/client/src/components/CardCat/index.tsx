import React, { useState } from 'react';
import { ICat } from '../../../../api/src/models/Cat';
import { animated, useSpring, interpolate } from 'react-spring';
import './cardCat.scss';

const CardCat: React.FC<{ cat: ICat; onClick: () => void }> = ({
  cat,
  onClick
}) => {
  const [currentCat, setCurrentCat] = useState(cat);
  const [deg, setDeg] = useState(0);
  const [front, setFront] = useState(0);

  const catsProps = useSpring({
    deg,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const [hoverProps, setHoverProps] = useSpring(() => ({
    tscale: 1,
    config: { mass: 1, tension: 250, friction: 11 }
  }));

  if (JSON.stringify(cat) !== JSON.stringify(currentCat)) {
    setDeg(deg + 180);
    setFront(front + 1);
    setCurrentCat(cat);
  }

  const handleClick = () => {
    onClick();
  };

  return (
    <animated.div
      style={{
        transform: interpolate(
          [catsProps.deg, hoverProps.tscale],
          (deg, tscale) =>
            `perspective(600px) rotateX(${deg}deg) scale(${tscale})`
        )
      }}
      className="card-cat"
      onMouseEnter={() => setHoverProps({ tscale: 1.1 })}
      onMouseLeave={() => setHoverProps({ tscale: 1 })}
      onClick={handleClick}
    >
      {currentCat && (
        <>
          <i
            className="card-cat__front-img"
            style={{
              backgroundImage: `url(${
                front % 2 === 0 ? cat.image : currentCat.image
              })`
            }}
          />

          <i
            className="card-cat__back-img"
            style={{
              backgroundImage: `url(${
                front % 2 === 1 ? cat.image : currentCat.image
              })`
            }}
          />
        </>
      )}
    </animated.div>
  );
};

export default CardCat;
