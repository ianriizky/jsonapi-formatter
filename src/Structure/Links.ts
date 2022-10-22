import { LinkObject } from './LinkObject';

/**
 * @see: https://jsonapi.org/format/#document-links
 */
export interface Links {
  self: string | LinkObject;
  related?: string | LinkObject;
}
