import { ErrorSource } from './ErrorSource';
import { Links } from './Links';
import { MetaInformation } from './MetaInformation';

/**
 * @see: https://jsonapi.org/format/#error-objects
 */
export interface ErrorObjects {
  id?: string | number;
  links?: Links;
  status?: string;
  code?: string;
  title?: string;
  detail?: string;
  source?: ErrorSource;
  meta?: MetaInformation;
}
