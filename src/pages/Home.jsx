import styled from "styled-components";
import { Header, HerosContainer, SearchInput } from "@components";
import useFetchHeros from "../services/useFetchHeros";
import { useState } from "react";

const StyledContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Home = () => {
  const [heros] = useFetchHeros();
  const [showFavoriteHeros, setShowFavoriteHeros] = useState(false);
  const [favoriteHeros, setFavoriteHeros] = useState([]);

  const addFavoriteHero = (hero) => {
    const index = favoriteHeros.findIndex((favHero) => favHero.id == hero.id);
    if (index == -1) {
      setFavoriteHeros((prevState) => [...prevState, hero]);
    } else {
      setFavoriteHeros((prevState) =>
        prevState.filter((currHero) => currHero.id != hero.id)
      );
    }
  };

  return (
    <StyledContainer>
      <Header />
      <SearchInput />
      <HerosContainer
        heros={showFavoriteHeros ? favoriteHeros : heros}
        setShowFavoriteHeros={setShowFavoriteHeros}
        addFavoriteHero={addFavoriteHero}
      />
    </StyledContainer>
  );
};

export default Home;
