import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledCard } from "./styles";
import { useHeroContext } from "../../contexts/herosContext";

const Card = ({ hero }) => {
  const [isPreferred, setIsPreferred] = useState(false);
  const { addFavoriteHero } = useHeroContext();

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
    <Link to={`/${hero.name}`}>
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
    </Link>
  );
};

export default Card;
