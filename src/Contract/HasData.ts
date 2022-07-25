import { DataArray, DataSingle } from '../Structure/JsonApiData';

export interface HasData {
  setData(data: DataSingle | DataArray): this;
  setDataAsSingle(data: DataSingle): this;
  setDataAsArray(data: DataArray): this;
}
