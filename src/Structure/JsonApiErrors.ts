import { JsonApi } from './JsonApi';
import { Error } from './Error';

export type JsonApiErrors = JsonApi & {
  errors: Error[];
};
