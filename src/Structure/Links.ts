import { LinkObject } from './LinkObject';

export type Links = {
  self: string | LinkObject;
  related?: string | LinkObject;
};
