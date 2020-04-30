import { request, requestWithRetry } from './requests';

export const URLS = {
  getFightersLike: '/fighters?fighterName=',
  fighters: '/fighters',
  getLegalStages: '/stages?legal=true',
  getStages: '/stages',
  matches: '/matches',
  players: '/players'
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
