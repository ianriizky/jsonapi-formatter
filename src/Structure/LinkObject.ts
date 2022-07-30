import { MetaInformation } from './MetaInformation';

/**
 * @see: https://jsonapi.org/format/#document-links
 */
export interface LinkObject {
  href: string;
  meta: MetaInformation;
}
