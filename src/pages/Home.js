import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Styling and Animations
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Router
import { useLocation } from "react-router-dom";

function Home() {
  // get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.key}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.key}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.key}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.key}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  margin: 0 2.5rem;
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 1.5rem;
  row-gap: 3rem;
  margin-bottom: 1rem;
`;

export default Home;
