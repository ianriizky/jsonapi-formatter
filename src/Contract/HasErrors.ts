import { Error as ErrorStructure } from '../Structure/Error';

export interface HasErrors {
  setErrors(errors: ErrorStructure[]): this;
  setError(error: ErrorStructure): this;
  addError(error: ErrorStructure): this;
  setErrorsFromNodejs(error: Error): this;
}
