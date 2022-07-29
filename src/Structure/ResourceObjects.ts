import { Attributes } from './Attributes';
import { Links } from './Links';
import { Relationships } from './Relationships';

/**
 * @see: https://jsonapi.org/format/#document-resource-objects
 */
export type ResourceObjects = {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
  links: Links;
} | null;

export type ResourceObjectsArray = ResourceObjects[];
