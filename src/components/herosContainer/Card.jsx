import { useState } from "react";
import { StyledCard } from "./styles";

const Card = ({ hero, addFavoriteHero }) => {
  const [isPreferred, setIsPreferred] = useState(false);

  const handleImgError = (e) => {
    e.target.src = "/src/assets/images/fallback-image.jpg";
  };

  const iconSrc = isPreferred
    ? "/src/assets/icons/Heart-Fullfiled.png"
    : "/src/assets/icons/Heart-Empty.png";

  const handleFavoriteClick = () => {
    setIsPreferred(!isPreferred);
    addFavoriteHero(hero);
  };

  return (
    <StyledCard>
      <img
        className="thumbnail"
        src={hero.thumbnail.path}
        alt={`${hero.name} thumbnail`}
        onError={(e) => handleImgError(e)}
      />
      <p>
        {hero.name}
        <img
          className="heart-icon"
          src={iconSrc}
          alt={`Favorite ${hero.name}`}
          onClick={handleFavoriteClick}
        />
      </p>
    </StyledCard>
  );
};

export default Card;
