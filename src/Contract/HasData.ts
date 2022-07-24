import { Data } from '../Structure/Data';

export interface HasData {
  setData(data: Data | Data[] | null | []): this;
  setDataAsSingle(data: Data | null): this;
  setDataAsArray(data: Data[] | []): this;
}
