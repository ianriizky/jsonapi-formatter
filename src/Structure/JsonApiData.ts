import { JsonApi } from './JsonApi';
import { Data } from './Data';

export type DataSingle = Data | null;
export type DataArray = Data[];
export type DataUndefined = undefined;

export type DataType = DataSingle | DataArray | DataUndefined;

export type JsonApiData = JsonApi & {
  data: DataType;
};
