import { JsonApiConfig } from './JsonApiConfig';
import { Version } from './Structure/Version';
import { Meta } from './Structure/Meta';
import { JsonApi } from './Structure/JsonApi';
import { HasMeta } from './Contract/HasMeta';

export abstract class AbstractJsonApi implements HasMeta {
  protected readonly config: JsonApiConfig = {
    app_url: 'http://localhost:3000',
  };

  public abstract httpStatusCode: number;

  public readonly jsonapi: Version = {
    version: '1.0',
  };

  public meta!: Meta;

  public constructor(config?: JsonApiConfig) {
    if (config) {
      this.config = config;
    }

    if (config?.version) {
      this.jsonapi.version = config.version;
    }
  }

  public setHttpStatusCode(status: number): this {
    this.httpStatusCode = status;

    return this;
  }

  public setMeta(meta: Meta): this {
    this.meta = meta;

    return this;
  }

  public abstract serialize(): JsonApi;

  public abstract deserialize(value: object): this;
}
