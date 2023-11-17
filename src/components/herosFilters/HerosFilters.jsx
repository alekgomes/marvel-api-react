import styled from "styled-components";
import clsx from "clsx";
import { useState } from "react";
import { useHeroContext } from "@contexts/herosContext";
import HeartFullfiled from "@assets/icons/Heart-Fullfiled.png";
import HeartEmpty from "@assets/icons/Heart-Empty.png";
import HeroIcon from "@assets/icons/Hero.png";

const StyledButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: none;
  color: var(--red);
  border-radius: 1rem;
  cursor: pointer;

  &.active {
    background: var(--salmon);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const HerosFilters = () => {
  const [state, setState] = useState({ ordered: false, onlyFavorites: false });
  const { setShowFavoriteHeros, toggleSort } = useHeroContext();

  const handleClick = ({ target }) => {
    const { name } = target;
    setState({ ...state, [name]: !state[name] });
  };

  const sortButtonText = state.ordered
    ? "Ordenar por nome crescente - A/Z"
    : "Ordenar por nome decrescente - Z/A";

  const preferedButtonText = state.onlyFavorites
    ? "Mostrar todos os heróis"
    : "Somente Favoritos";

  const favoriteIconSrc = state.onlyFavorites ? HeartEmpty : HeartFullfiled;

  const handleFavoriteClick = ({ target }) => {
    handleClick({ target });
    setShowFavoriteHeros((prevState) => !prevState);
  };

  const handleOrdered = ({ target }) => {
    handleClick({ target });
    toggleSort();
  };

  return (
    <StyledContainer>
      <StyledButton
        className={clsx({ active: state.ordered })}
        name="ordered"
        onClick={handleOrdered}
      >
        <img src={HeroIcon} alt="Heros Icon" />
        {sortButtonText}
      </StyledButton>
      <StyledButton
        className={clsx({ active: state.onlyFavorites })}
        name="onlyFavorites"
        onClick={handleFavoriteClick}
      >
        <img src={favoriteIconSrc} alt="Herth icon" />
        {preferedButtonText}
      </StyledButton>
    </StyledContainer>
  );
};

export default HerosFilters;
