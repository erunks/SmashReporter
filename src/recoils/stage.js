import { atom, selector } from 'recoil';

export const selectedStageState = atom({
  key: 'selectedStageState',
  default: 1
});

export const getSelectedStage = selector({
  key: 'getSelectedStage',
  get: ({ get }) => (get(selectedStageState) - 1),
});

export default {
  getSelectedStage,
  selectedStageState
};
