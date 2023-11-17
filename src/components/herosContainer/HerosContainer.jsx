import { HerosFilters } from "@components";
import { StyledFlexContainer, StyledCardGridContainer } from "./styles";
import Card from "./Card";

/**
 * This function accepts a prop called `heros` and maps its content to a array of cards
 *
 * @param {Array} heros - The array of heros coming from the API
 * @returns {HTMLCollection} The mapped array of heros to a list of cards
 */

function HerosContainer({ heros, setShowFavoriteHeros, addFavoriteHero }) {
  return (
    <>
      <StyledFlexContainer>
        <span>Encontradros {heros.length} heróis</span>
        <HerosFilters setShowFavoriteHeros={setShowFavoriteHeros} />
      </StyledFlexContainer>

      <StyledCardGridContainer>
        {heros.map((hero) => (
          <Card hero={hero} key={hero.id} addFavoriteHero={addFavoriteHero} />
        ))}
      </StyledCardGridContainer>
    </>
  );
}

export default HerosContainer;
