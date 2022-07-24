import { JsonApi } from './JsonApi';
import { Data } from './Data';

export type JsonApiData = JsonApi & {
  data: Data | Data[] | null | [];
};
