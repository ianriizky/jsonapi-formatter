import { StatusCodes } from 'http-status-codes';
import { Config } from './Config';
import { HasJsonApi } from './Contract/HasJsonApi';
import { TopLevel } from './Structure/TopLevel';
import { Version } from './Structure/Version';

export abstract class JsonApi implements HasJsonApi {
  protected readonly config: Config = {
    app_url: 'http://localhost:3000',
  };

  public httpStatusCode: StatusCodes = StatusCodes.OK;

  public jsonapi: Version = {
    version: '1.0',
  };

  public constructor(config?: Config) {
    if (config) {
      this.config = config;
    }

    if (config?.version) {
      this.jsonapi.version = config.version;
    }
  }

  public setHttpStatusCode(status: StatusCodes): this {
    this.httpStatusCode = status;

    return this;
  }

  public setJsonapi(jsonapi?: Version): this {
    if (jsonapi) {
      this.jsonapi = jsonapi;
    }

    return this;
  }

  public serialize(): TopLevel {
    return {
      jsonapi: this.jsonapi,
    };
  }

  public deserialize(serialize: TopLevel): this {
    return this.setJsonapi(serialize.jsonapi);
  }
}
