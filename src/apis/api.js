import axios from "../utilities/axios";

export const login = (payload) => {
  console.log({ payload });
  return axios.post(`/auth/login`, payload);
};

export const addPlayer = (payload) => {
  return axios.post(`/player`, payload);
};

export const getPlayersList = (teamType) => {
  return axios.get(`/player?teamType=${teamType}`);
};

export const getGames = (gameType = "SUNDAY_FOURBALLS") => {
  return axios.get(`/game?gameType=${gameType}`);
};

export const addGame = (payload) => {
  console.log({ payload });
  return axios.post(`/game`, payload);
};

export const updateGame = (id, payload) => {
  return axios.put(`/game?gameId=${id}`, payload);
};
