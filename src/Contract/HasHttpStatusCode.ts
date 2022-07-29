import { StatusCodes } from 'http-status-codes';

export interface HasHttpStatusCode {
  setHttpStatusCode(status: StatusCodes): this;
}
