import { useEffect, useState } from 'react';

type CatFact = {
  fact: string;
};

type Response = {
  data: CatFact[];
};

const Index = () => {
  const [catFacts, setCatFacts] = useState<CatFact[]>([]);
  const [favoriteFacts, setFavoriteFacts] = useState<CatFact[]>([]);

  const CAT_FACT_API_ENDPOINT = 'https://catfact.ninja/facts';

  const fetchCatFacts = async () => {
    const request = await fetch(CAT_FACT_API_ENDPOINT);

    const response = (await request.json()) as Response;

    setCatFacts(response.data);
  };

  useEffect(() => {
    fetchCatFacts();
  }, []);

  return (
    <>
      <h1>Favorite Cat Facts</h1>

      <ul>
        {catFacts.map((catFact) => (
          <li>
            {catFact.fact}

            <button
              onClick={() => {
                setFavoriteFacts([...favoriteFacts, catFact]);
              }}>
              Favorite
            </button>
          </li>
        ))}
      </ul>

      <h1>Cat Facts</h1>

      <ul>
        {favoriteFacts.map((favoriteFact) => (
          <li>
            {favoriteFact.fact}

            <button
              onClick={() => {
                setFavoriteFacts(
                  favoriteFacts.filter((catFact) => catFact !== favoriteFact),
                );
              }}>
              Unfavorite
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Index;
