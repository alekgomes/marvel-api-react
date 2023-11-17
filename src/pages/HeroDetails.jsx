import { useParams } from "react-router-dom";
import { useHeroContext } from "../contexts/herosContext";

import MarvelLogo from "../assets/images/logo/Group@1,5x.svg";
import {
  PageContainer,
  StyledContainer,
  StyledHeader,
  StyledSection,
  StyledGridContainer,
  StyledComic,
  HeroInformations,
  HeroThumbnail,
} from "./HeroDetails.styles";

const HeroDetails = () => {
  const { heroId } = useParams();
  const { heros, favoriteHeros } = useHeroContext();
  const hero = heros.find((h) => h.id == heroId);

  const handleImgError = (e) => {
    e.target.src = "/src/assets/images/fallback-image.jpg";
  };

  const isFavorite = favoriteHeros.findIndex((h) => h.id == hero.id);

  const iconSrc =
    isFavorite < 0
      ? "/src/assets/icons/Heart-Empty.png"
      : "/src/assets/icons/Heart-Fullfiled.png";

  const comics =
    hero.comics.items <= 10
      ? hero.comics.items
      : hero.comics.items.slice(0, 10);

  return (
    <PageContainer>
      <StyledContainer>
        <StyledHeader>
          <img src={MarvelLogo} alt="Marvel's Logo" />
        </StyledHeader>
        <StyledSection>
          <HeroInformations>
            <p className="title">
              <h1>{hero.name}</h1>
              <img src={iconSrc} alt="" />
            </p>
            <p>{hero.description}</p>
            <div>
              <div className="flex">
                <div>
                  <p className="bold">Quadrinhos</p>
                  <p className="bold">
                    <img
                      className="padding"
                      src="/src/assets/icons/Book.png"
                      alt=""
                    />
                    {hero.comics.available}
                  </p>
                </div>
                <div>
                  <p className="bold">Filmes</p>
                  <p className="bold">
                    <img
                      className="padding"
                      src="/src/assets/icons/Video.png"
                      alt=""
                    />
                    {hero.series.available}
                  </p>
                </div>
              </div>
              <p>
                <span className="bold">Rating:</span>
                <img
                  className="padding"
                  src="/src/assets/icons/Review.png"
                  alt=""
                />
              </p>
              <p>
                <span className="bold">Último quadrinhos:</span> 13 fev. 2020
              </p>
            </div>
          </HeroInformations>
          <HeroThumbnail>
            <img
              className="thumbnail"
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={`${hero.name} thumbnail`}
            />
          </HeroThumbnail>
        </StyledSection>
        <p className="bold">Últimos Lançamentos</p>
        <StyledGridContainer>
          {comics.map((c) => {
            return (
              <StyledComic key={c.name}>
                <img
                  src={c.resourceURI}
                  alt="Comics cover"
                  onError={(e) => handleImgError(e)}
                />
                <p>{c.name}</p>
              </StyledComic>
            );
          })}
        </StyledGridContainer>
      </StyledContainer>
    </PageContainer>
  );
};

export default HeroDetails;
