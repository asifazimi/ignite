import axios from "axios";
import {
  populareGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

// Action Creators
export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(populareGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  // Send it back to reducers
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
