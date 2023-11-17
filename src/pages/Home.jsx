import styled from "styled-components";
import { Header, HerosContainer, SearchInput } from "@components";

const StyledContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <StyledContainer>
      <Header />
      <SearchInput />
      <HerosContainer />
    </StyledContainer>
  );
};

export default Home;
