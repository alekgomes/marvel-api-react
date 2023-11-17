import { createContext, useContext, useState } from "react";

import useFetchHeros from "../services/useFetchHeros";

const HeroContext = createContext([]);

export function HeroContextProvider({ children }) {
  const [heros] = useFetchHeros();
  const [showFavoriteHeros, setShowFavoriteHeros] = useState(false);
  const [favoriteHeros, setFavoriteHeros] = useState([]);
  const [sortState, setSortState] = useState("ASC");

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

  const displayedHeros = () => {
    if (showFavoriteHeros) return favoriteHeros;
    if (sortState == "DESC") return heros.toReversed();
    return heros;
  };

  const toggleSort = () => {
    if (sortState == "ASC") setSortState("DESC");
    else setSortState("ASC");
  };

  return (
    <HeroContext.Provider
      value={{
        heros: displayedHeros(),
        addFavoriteHero,
        setShowFavoriteHeros,
        toggleSort,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
}

export function useHeroContext() {
  const context = useContext(HeroContext);

  if (!context) {
    throw new Error("HeroContext error");
  }

  return context;
}
