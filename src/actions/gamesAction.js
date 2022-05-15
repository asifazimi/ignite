import axios from "axios";
import { populareGamesURL } from "../api";
import { upcomingGamesURL } from "../api";
import { newGamesURL } from "../api";

// Action Creators
export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(populareGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());

  // Send it back to reducers
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });
};
