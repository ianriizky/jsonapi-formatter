import { Links } from './Links';
import { MetaInformation } from './MetaInformation';
import { ResourceLinkage } from './ResourceLinkage';

/**
 * @see: https://jsonapi.org/format/#document-resource-object-relationships
 */
export interface RelationshipsWithLinks {
  [key: string]: {
    links: Links;
    data?: ResourceLinkage;
    meta?: MetaInformation;
  };
}

export interface RelationshipsWithData {
  [key: string]: {
    links?: Links;
    data: ResourceLinkage;
    meta?: MetaInformation;
  };
}

export interface RelationshipsWithMeta {
  [key: string]: {
    links?: Links;
    data?: ResourceLinkage;
    meta: MetaInformation;
  };
}

export type Relationships =
  | RelationshipsWithLinks
  | RelationshipsWithData
  | RelationshipsWithMeta;
