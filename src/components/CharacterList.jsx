import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage({ page, setPage }) {
  return (
    <div className="d-flex justify-content-between align-items-center py-4">
      {page <= 1 ? (
        <button className="btn btn-primary btn-sm" disabled>
          page {page - 1}
        </button>
      ) : (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setPage(page - 1)}
        >
          page {page - 1}
        </button>
      )}

      <p>Page: {page}</p>

      {page >= 42 ? (
        <button
          className="btn btn-primary btn-sm" disabled
        >
          page {page + 1}
        </button>
      ) : (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setPage(page + 1)}
        >
          page {page + 1}
        </button>
      )}
    </div>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}
      `
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;