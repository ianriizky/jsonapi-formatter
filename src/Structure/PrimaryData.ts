import {
  ResourceObjects,
  ResourceObjectsArray,
  ResourceObjectsNull,
} from './ResourceObjects';

/**
 * @see: https://jsonapi.org/format/#document-top-level
 */
export type PrimaryData =
  | ResourceObjects
  | ResourceObjectsArray
  | ResourceObjectsNull;
