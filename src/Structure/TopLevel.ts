import { CompoundDocuments } from './CompoundDocuments';
import { ErrorObjects } from './ErrorObjects';
import { Links } from './Links';
import { MetaInformation } from './MetaInformation';
import { PrimaryData } from './PrimaryData';
import { Version } from './Version';

/**
 * @see: https://jsonapi.org/format/#document-top-level
 */
export type TopLevel = {
  jsonapi: Version;
};

export type TopLevelWithMeta = TopLevel & {
  meta: MetaInformation;
};

export type TopLevelWithData = TopLevel & {
  data: PrimaryData;
  links?: Links;
  included?: CompoundDocuments;
  meta?: MetaInformation;
};

export type TopLevelWithErrors = TopLevel & {
  errors: ErrorObjects[];
  meta?: MetaInformation;
};
