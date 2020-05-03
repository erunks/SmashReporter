import { request, requestWithRetry } from './requests';

const apiUrl = process.env.REACT_APP_API_URL;

export const URLS = {
  getFightersLike: `${apiUrl}/fighters?fighterName=`,
  fighters: `${apiUrl}/fighters`,
  getLegalStages: `${apiUrl}/stages?legal=true`,
  getStages: `${apiUrl}/stages`,
  matches: `${apiUrl}/matches`,
  players: `${apiUrl}/players`
};

export function getFighter(fighterId) {
  return request(`${URLS.fighters}/${fighterId}`);
}

export function getFighters() {
  return requestWithRetry(URLS.fighters);
}

export function getFightersLike(query) {
  return requestWithRetry(`${URLS.getFightersLike}${query}`);
}

export function getLegalStages() {
  return request(URLS.getLegalStages);
}

export function getStages() {
  return request(URLS.getStages);
}

export function getPlayer(playerId) {
  return request(`${URLS.players}/${playerId}`);
}

export function getPlayers() {
  return requestWithRetry(URLS.players);
}
