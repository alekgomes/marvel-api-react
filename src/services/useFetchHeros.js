import { useEffect, useState } from "react";
import md5 from "md5";

const useFetchHeros = () => {
  const [heros, setHeros] = useState([]);
  // TODO
  // Add error state
  // Add loading state

  const ts = Date.now(); 
  // TODO - levar essas keys para o .env
  const privateKey = "ee4cc2cb1737737906ea469eb1537028190a57c9";
  const publicKey = "452f43d7e8860de77e75e535ecbf11b0";
  const hash = md5(`${ts}${privateKey}${publicKey}`);

  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    const controller = new AbortController();

    const getHeros = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        const { data } = await response.json();
        if (!data) return;
        setHeros(data.results);
      } catch (err) {
        if (!controller.signal.aborted) {
          throw new Error("Erro ao buscar heróis");
        }
      }
    };

    getHeros();
    return () => {
      controller.abort();
    };
  }, []);

  return [heros, setHeros];
};

export default useFetchHeros;
