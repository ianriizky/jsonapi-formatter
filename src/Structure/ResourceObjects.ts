import { Attributes } from './Attributes';
import { Links } from './Links';
import { Relationships } from './Relationships';

/**
 * @see: https://jsonapi.org/format/#document-resource-objects
 */
export interface ResourceObjects {
  type: string;
  id: string;
  attributes?: Attributes;
  relationships?: Relationships;
  links?: Links;
}

export type ResourceObjectsArray = Array<ResourceObjects | ResourceObjectsNull>;

export type ResourceObjectsNull = null;
