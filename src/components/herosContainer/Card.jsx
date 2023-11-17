import { Link } from "react-router-dom";
import { StyledCard } from "./styles";
import { useHeroContext } from "@contexts/herosContext";
import HeartEmpty from "@assets/icons/Heart-Empty.png";
import HeartFullfiled from "@assets/icons/Heart-Fullfiled.png";
import FallbackImage from "@assets/images/fallback-image.jpg";

const Card = ({ hero }) => {
  const { addFavoriteHero, favoriteHeros } = useHeroContext();

  const isFavorite = favoriteHeros.findIndex((h) => h.id == hero.id);

  const iconSrc = isFavorite >= 0 ? HeartFullfiled : HeartEmpty;

  const handleFavoriteClick = () => {
    addFavoriteHero(hero);
  };

  const handleImgError = (e) => {
    e.target.src = FallbackImage;
  };

  return (
    <StyledCard>
      <Link to={`/${hero.id}`}>
        <img
          className="thumbnail"
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={`${hero.name} thumbnail`}
          onError={(e) => handleImgError(e)}
        />
      </Link>
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
