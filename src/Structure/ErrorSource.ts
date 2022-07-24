/**
 * @see: https://jsonapi.org/format/#error-objects
 */
export type ErrorSource = {
  pointer: string | null;
  parameter: string | null;
};
