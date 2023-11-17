import styled from "styled-components";
import { Header, HerosContainer, SearchInput } from "@components";
import useFetchHeros from "../services/useFetchHeros";

const StyledContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Home = () => {
  const [heros] = useFetchHeros();
  return (
    <StyledContainer>
      <Header />
      <SearchInput />
      <HerosContainer heros={heros} />
    </StyledContainer>
  );
};

export default Home;
