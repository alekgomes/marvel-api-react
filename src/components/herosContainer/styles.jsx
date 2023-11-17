import styled from "styled-components";

export const StyledCardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));
  gap: 2.8vw;
`;
export const StyledCard = styled.div`
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

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;
