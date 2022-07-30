/**
 * @see: https://jsonapi.org/format/#error-objects
 */
export interface ErrorSource {
  pointer: string | null;
  parameter: string | null;
}
