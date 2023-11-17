import { memo } from "react";
import { HerosFilters } from "@components";
import { StyledFlexContainer, StyledCardGridContainer } from "./styles";
import Card from "./Card";
import { useHeroContext } from "../../contexts/herosContext";

const CardGridContainer = memo(function CardGridContainer({ heros }) {
  return (
    <StyledCardGridContainer>
      {heros.map((hero) => (
        <Card hero={hero} key={hero.id} />
      ))}
    </StyledCardGridContainer>
  );
});

function HerosContainer() {
  const { heros } = useHeroContext();

  return (
    <>
      <StyledFlexContainer>
        <span>Encontradros {heros.length} heróis</span>
        <HerosFilters />
      </StyledFlexContainer>
      <CardGridContainer heros={heros} />
    </>
  );
}

export default HerosContainer;
