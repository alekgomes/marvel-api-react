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
`;

const HerosFilters = () => {
  const [state, setState] = useState({ ordered: false, onlyFavorites: false });

  const handleClick = ({ target }) => {
    const { name } = target;
    setState({ ...state, [name]: !state[name] });
  };

  return (
    <StyledContainer>
      <StyledButton
        className={clsx({ active: state.ordered })}
        name="ordered"
        onClick={handleClick}
      >
        <img src="/src/assets/icons/Hero.png" alt="Heros Icon" />
        Ordenar por nome - A/Z
      </StyledButton>
      <StyledButton
        className={clsx({ active: state.onlyFavorites })}
        name="onlyFavorites"
        onClick={handleClick}
      >
        <img src="/src/assets/icons/Heart-Fullfiled.png" alt="Herth icon" />
        Somente Favoritos
      </StyledButton>
    </StyledContainer>
  );
};

export default HerosFilters;
