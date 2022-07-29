import { Links } from './Links';
import { MetaInformation } from './MetaInformation';
import { ResourceLinkage } from './ResourceLinkage';

/**
 * @see: https://jsonapi.org/format/#document-resource-object-relationships
 */
export type RelationshipsWithLinks = {
  [key: string]: {
    links: Links;
    data?: ResourceLinkage;
    meta?: MetaInformation;
  };
};

export type RelationshipsWithData = {
  [key: string]: {
    links?: Links;
    data: ResourceLinkage;
    meta?: MetaInformation;
  };
};

export type RelationshipsWithMeta = {
  [key: string]: {
    links?: Links;
    data?: ResourceLinkage;
    meta: MetaInformation;
  };
};

export type Relationships =
  | RelationshipsWithLinks
  | RelationshipsWithData
  | RelationshipsWithMeta;
