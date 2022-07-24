import { ErrorSource } from './ErrorSource';
import { Links } from './Links';
import { Meta } from './Meta';

/**
 * @see: https://jsonapi.org/format/#error-objects
 */
export type Error = {
  id?: string | number;
  links?: Links;
  status?: string; // this is required field, but will be filled by "httpStatusCode" if the incoming value is null
  code?: string;
  title?: string; // this is required field, but will be filled by reason phrases of "status" if the incoming value is null
  detail?: string;
  source?: ErrorSource;
  meta?: Meta;
};
