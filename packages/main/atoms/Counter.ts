import { atom } from 'recoil';
import { uuid } from '../utils/common';

export const countState = atom<number>({
  key: uuid(),
  default: 0,
});
