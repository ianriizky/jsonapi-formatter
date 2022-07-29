import { PrimaryData } from '../Structure/PrimaryData';

export interface HasPrimaryData {
  setData(data?: PrimaryData): this;
}
