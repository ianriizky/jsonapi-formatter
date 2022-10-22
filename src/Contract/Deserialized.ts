import { Config } from '../Config';
import { JsonApi } from '../JsonApi';
import { TopLevel } from '../Structure/TopLevel';

export interface Deserialized {
  deserialize(serialize: TopLevel): this;
  deserialize(serialize: TopLevel, config?: Config): JsonApi;
}
