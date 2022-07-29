import { Deserialized } from './Deserialized';
import { HasHttpStatusCode } from './HasHttpStatusCode';
import { HasVersion } from './HasVersion';
import { Serialized } from './Serialized';

export interface HasJsonApi
  extends HasVersion,
    HasHttpStatusCode,
    Serialized,
    Deserialized {}
