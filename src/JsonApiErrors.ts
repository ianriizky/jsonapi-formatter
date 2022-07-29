import ErrorStackParser from 'error-stack-parser';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { Config } from './Config';
import { HasJsonApiErrors } from './Contract/HasJsonApiErrors';
import { JsonApi } from './JsonApi';
import { ErrorObjects } from './Structure/ErrorObjects';
import { MetaInformation } from './Structure/MetaInformation';
import { TopLevelWithErrors } from './Structure/TopLevel';

/**
 * @see: https://jsonapi.org/format/#errors
 */
export class JsonApiErrors extends JsonApi implements HasJsonApiErrors {
  public httpStatusCode: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR;

  public showMetaOnError = true;

  public errors: ErrorObjects[] = [];
  public meta?: MetaInformation;

  public constructor(config?: Config) {
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

  public setErrors(errors?: ErrorObjects | ErrorObjects[]): this {
    if (errors) {
      if (!Array.isArray(errors)) {
        errors = [errors];
      }

      this.errors = errors.map(error => this.parseError(error));
    }

    return this;
  }

  public addError(error: ErrorObjects): this {
    this.errors.push(this.parseError(error));

    return this;
  }

  public setErrorsFromNodejs(error: Error): this {
    const parsedError = ErrorStackParser.parse(error);

    return this.setErrors({
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

  protected parseError(error: ErrorObjects): ErrorObjects {
    const errorStatus = error?.status || this.httpStatusCode;

    // make sure the "error.status" will always be a string type
    error.status = `${errorStatus}`;

    if (!error.title) {
      error.title = getReasonPhrase(error.status);
    }

    return error;
  }

  public setMeta(meta?: MetaInformation): this {
    if (meta) {
      this.meta = meta;
    }

    return this;
  }

  public serialize(): TopLevelWithErrors {
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
      errors,
      meta: this.meta,
    };
  }

  public deserialize(serialize: TopLevelWithErrors): this {
    return super
      .deserialize(serialize)
      .setErrors(serialize.errors)
      .setMeta(serialize.meta);
  }

  public static deserialize(
    serialize: TopLevelWithErrors,
    config?: Config
  ): JsonApiErrors {
    return new this(config).deserialize(serialize);
  }
}
