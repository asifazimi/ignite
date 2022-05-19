import React from "react";
// Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  // Data
  const { screen, game } = useSelector((state) => state.detail);

  return (
    <div className="card-shado">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            {game.platforms.map((data) => (
              <h3 key={data.platform.id}>{data.platform.name}</h3>
            ))}
          </div>
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="media">
          <img src={game.background_image} alt="Bakground Image" />
        </div>
        <div className="gallary">
          {screen.results.map((screen) => (
            <img src={screen.image} alt="Game" key={screen.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
