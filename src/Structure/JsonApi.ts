import { Version } from './Version';
import { Meta } from './Meta';

export type JsonApi = {
  jsonapi: Version;
  meta?: Meta;
};
