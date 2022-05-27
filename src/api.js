// Base URL
const api_key = "?key=37a6694facd1409788744501a4b4ec0b";
const base_url = `https://api.rawg.io/api/games`;

//   Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

getCurrentMonth();

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

getCurrentDay();

// Current day, month, year
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//   Games URL
const populare_Games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=9&platforms=18,1,7`;
const upcoming_Games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=9&platforms=18,1,7`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=9&platforms=18,1,7`;
export const populareGamesURL = () => `${base_url}${api_key}${populare_Games}`;
export const upcomingGamesURL = () => `${base_url}${api_key}${upcoming_Games}`;
export const newGamesURL = () => `${base_url}${api_key}${newGames}`;

// Game Details
export const gameDetailsURL = (game_id) => `${base_url}/${game_id}${api_key}`;
export const gameScreenShotURL = (game_id) =>
  `${base_url}/${game_id}/screenshots${api_key}`;

// Searched game
export const searchGameURL = (game_name) =>
  `${base_url}?search=${game_name}&key=37a6694facd1409788744501a4b4ec0b&page_size=9`;
