import React, { useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  // FETCH GAMES
  return (
    <div className="home">
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
