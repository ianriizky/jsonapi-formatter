import ErrorStackParser from 'error-stack-parser';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { AbstractJsonApi } from './AbstractJsonApi';
import { HasErrors } from './Contract/HasErrors';
import { JsonApiConfig } from './JsonApiConfig';
import { Error as ErrorStructure } from './Structure/Error';
import { JsonApiErrors } from './Structure/JsonApiErrors';

/**
 * @see: https://jsonapi.org/format/#errors
 */
export class JsonApiException extends AbstractJsonApi implements HasErrors {
  public httpStatusCode: number = StatusCodes.INTERNAL_SERVER_ERROR;

  public showMetaOnError: boolean = true;

  public errors: ErrorStructure[] = [];

  public constructor(config?: JsonApiConfig) {
    super(config);

    if (config?.show_meta_on_error !== undefined) {
      this.showMetaOnError = config.show_meta_on_error;
    }
  }

  public unhideMetaOnError(): this {
    this.showMetaOnError = true;

    return this;
  }

  public hideMetaOnError(): this {
    this.showMetaOnError = false;

    return this;
  }

  public setErrors(errors: ErrorStructure[]): this {
    this.errors = errors.map(error => this.parseError(error));

    return this;
  }

  public setError(error: ErrorStructure): this {
    this.errors = [this.parseError(error)];

    return this;
  }

  public addError(error: ErrorStructure): this {
    this.errors.push(this.parseError(error));

    return this;
  }

  protected parseError(error: ErrorStructure): ErrorStructure {
    if (!error.status) {
      error.status = `${this.httpStatusCode}`;
    }

    // make sure the "error.status" will always be a string type
    error.status = `${error.status}`;

    if (!error.title) {
      error.title = getReasonPhrase(error.status);
    }

    return error;
  }

  public setErrorsFromNodejs(error: Error): this {
    const parsedError = ErrorStackParser.parse(error);

    return this.setError({
      detail: error.message,
      meta: {
        details: parsedError[0].toString(),
        exception: error.name,
        file: parsedError[0].getFileName(),
        line: parsedError[0].getLineNumber(),
        trace: parsedError.map(parsedError => ({
          details: parsedError.toString(),
          file: parsedError.getFileName(),
          line: parsedError.getLineNumber(),
          function: parsedError.getFunctionName(),
          source: parsedError.getSource(),
        })),
      },
    });
  }

  public serialize(): JsonApiErrors {
    let errors = this.errors;

    errors = this.showMetaOnError
      ? errors
      : errors.map(error => {
          /**
           * Because Array.map() is a mutate function, we must
           * use spread operator (...) to prevent changing on the origins value.
           */
          error = { ...error };

          error.meta = undefined;

          return error;
        });

    return {
      jsonapi: this.jsonapi,
      meta: this.meta,
      errors,
    };
  }

  public deserialize(value: object): this {
    throw new Error('Method not implemented.');
  }
}
