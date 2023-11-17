import styled from "styled-components";
import clsx from "clsx";
import { useState } from "react";

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

const HerosFilters = ({ setShowFavoriteHeros }) => {
  const [state, setState] = useState({ ordered: false, onlyFavorites: false });

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

  const favoriteIconSrc = state.onlyFavorites
    ? "/src/assets/icons/Heart-Empty.png"
    : "/src/assets/icons/Heart-Fullfiled.png";

  const handleFavoriteClick = ({ target }) => {
    handleClick({ target });
    setShowFavoriteHeros((prevState) => !prevState);
  };

  return (
    <StyledContainer>
      <StyledButton
        className={clsx({ active: state.ordered })}
        name="ordered"
        onClick={handleClick}
      >
        <img src="/src/assets/icons/Hero.png" alt="Heros Icon" />
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
