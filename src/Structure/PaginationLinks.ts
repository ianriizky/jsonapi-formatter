/**
 * @see: https://jsonapi.org/format/#fetching-pagination
 */
export interface PaginationLinks {
  first: string | undefined;
  last: string | undefined;
  prev: string | undefined;
  next: string | undefined;
}
