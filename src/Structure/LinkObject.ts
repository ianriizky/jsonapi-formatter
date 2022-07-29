import { MetaInformation } from './MetaInformation';

/**
 * @see: https://jsonapi.org/format/#document-links
 */
export type LinkObject = {
  href: string;
  meta: MetaInformation;
};
