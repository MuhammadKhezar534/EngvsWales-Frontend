import axios from "../utilities/axios";

export const login = (payload) => {
  console.log({ payload });
  return axios.post(`/auth/login`, payload);
};

export const addPlayer = (payload, id) => {
  if (id !== null) {
    return axios.put(`/player?id=${id}`, payload);
  } else {
    return axios.post(`/player`, payload);
  }
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

export const getGameById = (id) => {
  return axios.get(`/game/single-game/${id}`);
};

export const deleteGame = (id) => {
  return axios.delete(`/game?gameId=${id}`);
};

export const getPlayerById = (id) => {
  return axios.get(`/player/single/${id}`);
};
