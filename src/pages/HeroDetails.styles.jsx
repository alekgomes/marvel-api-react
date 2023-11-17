import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: var(--green);

  .bold {
    font-weight: 700;
  }
`;

export const StyledHeader = styled.header``;

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroInformations = styled.div`
  color: var(--text-grey);
  max-width: 35vw;
  font-size: 110%;
  margin-right: 3rem;

  @media (max-width: 700px) {
    max-width: 100%;
  }

  .title {
    color: var(--text-dark);
    display: flex;
    justify-content: space-between;

    position: relative;
    padding-right: 25px;

    img {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .padding {
    padding: 0 0.75rem 0 0.75rem;
  }
`;

export const HeroThumbnail = styled.div`
  /* padding-right: 2rem; */

  img {
    width: 100%;
    max-width: 400px;
    display: inline-block;
  }
`;

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 6fr));
  gap: 2.8vw;
`;

export const StyledComic = styled.div`
  img {
    width: 100%;
  }
`;
