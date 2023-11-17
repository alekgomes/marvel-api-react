import { HerosFilters } from "@components";
import { StyledFlexContainer, StyledCardGridContainer } from "./styles";
import Card from "./Card";
import { useHeroContext } from "../../contexts/herosContext";

function HerosContainer() {
  const { heros } = useHeroContext();

  return (
    <>
      <StyledFlexContainer>
        <span>Encontradros {heros.length} heróis</span>
        <HerosFilters />
      </StyledFlexContainer>
      <StyledCardGridContainer>
        {heros.map((hero) => (
          <Card hero={hero} key={hero.id} />
        ))}
      </StyledCardGridContainer>
    </>
  );
}

export default HerosContainer;
