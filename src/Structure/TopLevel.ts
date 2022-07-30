import { CompoundDocuments } from './CompoundDocuments';
import { ErrorObjects } from './ErrorObjects';
import { Links } from './Links';
import { MetaInformation } from './MetaInformation';
import { PrimaryData } from './PrimaryData';
import { Version } from './Version';

/**
 * @see: https://jsonapi.org/format/#document-top-level
 */
export interface TopLevel {
  jsonapi: Version;
}

export interface TopLevelWithMeta extends TopLevel {
  meta: MetaInformation;
}

export interface TopLevelWithData extends TopLevel {
  data: PrimaryData;
  links?: Links;
  included?: CompoundDocuments;
  meta?: MetaInformation;
}

export interface TopLevelWithErrors extends TopLevel {
  errors: Array<ErrorObjects>;
  meta?: MetaInformation;
}
