import { atom } from 'recoil';

export const fighterState = atom({
  key: 'fighterState',
  default: [{}]
});

export const selectedFightersState = atom({
  key: 'selectedFightersState',
  default: ['random','random']
});

export default {
  fighterState,
  selectedFightersState
};
