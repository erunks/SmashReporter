import { atom, selector } from 'recoil';
import findIndex from 'lodash/findIndex';
import slice from 'lodash/slice';

export const fighterState = atom({
  key: 'fighterState',
  default: [{}]
});

export const orderedFighters = selector({
  key: 'getFighters',
  get: ({ get }) => {
    const fighters = get(fighterState);
    const start = findIndex(fighters, { name: 'Mii Fighter Brawler' });
    if (start) {
      const before = slice(fighters, 0, start);
      const pulled = slice(fighters, start, start + 3);
      const after = slice(fighters, start + 3);
      return [...before, ...after, ...pulled];
    } else {
      return fighters;
    }
  },
});

export const selectedFightersState = atom({
  key: 'selectedFightersState',
  default: ['random','random']
});

export default {
  fighterState,
  orderedFighters,
  selectedFightersState
};
