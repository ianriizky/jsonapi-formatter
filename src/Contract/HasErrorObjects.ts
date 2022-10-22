import { ErrorObjects } from '../Structure/ErrorObjects';

export interface HasErrorObjects {
  setErrors(errors: ErrorObjects | Array<ErrorObjects>): this;
  addError(error: ErrorObjects): this;
  setErrorsFromNodejs(error: Error): this;
}
