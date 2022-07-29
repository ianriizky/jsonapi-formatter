import { Version } from '../Structure/Version';

export interface HasVersion {
  setJsonapi(jsonapi?: Version): this;
}
