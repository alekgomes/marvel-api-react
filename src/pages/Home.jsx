import styled from "styled-components";
import { Header, HerosContainer, SearchInput } from "@components";
import { HeroContextProvider } from "../contexts/herosContext";

const StyledContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <HeroContextProvider>
      <StyledContainer>
        <Header />
        <SearchInput />
        <HerosContainer />
      </StyledContainer>
    </HeroContextProvider>
  );
};

export default Home;
