import styled from "styled-components";
import { HerosFilters } from "@components";

const StyledCardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 4fr));
  gap: 2.8vw;
`;
const StyledCard = styled.div`
  p {
    position: relative;
    padding-right: 25px;

    img.heart-icon {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  img.thumbnail {
    width: 100%;
    aspect-ratio: 1;
    border-bottom: 2px solid var(--red);
  }
  cursor: pointer;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

/**
 * This function accepts a prop called `heros` and maps its content to a array of cards
 *
 * @param {Array} heros - The array of heros coming from the API
 * @returns {HTMLCollection} The mapped array of heros to a list of cards
 */

function HerosContainer({ heros }) {
  const handleImgError = (e) => {
    e.target.src = "/src/assets/images/fallback-image.jpg";
  };

  return (
    <>
      <StyledFlexContainer>
        <span>Encontradros {heros.length} heróis</span>
        <HerosFilters />
      </StyledFlexContainer>

      <StyledCardGridContainer>
        {heros.map((hero) => (
          <StyledCard key={hero.id}>
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
                src="/src/assets/icons/Heart-Empty.png"
                alt="Heart Icon"
              />
            </p>
          </StyledCard>
        ))}
      </StyledCardGridContainer>
    </>
  );
}

export default HerosContainer;
