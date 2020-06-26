import { atom } from 'recoil';

export const selectingPlayerState = atom({
  key: 'selectingPlayerState',
  default: 0
});

export default {
  selectingPlayerState
};
