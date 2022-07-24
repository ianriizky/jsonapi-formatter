import { StatusCodes } from 'http-status-codes';
import { AbstractJsonApi } from './AbstractJsonApi';
import { HasData } from './Contract/HasData';
import { Data } from './Structure/Data';
import { JsonApiData } from './Structure/JsonApiData';

/**
 * @see: https://jsonapi.org/format
 */
export class JsonApi extends AbstractJsonApi implements HasData {
  public httpStatusCode: number = StatusCodes.OK;

  public data: Data | Data[] | null | [] = null;

  public serialize(): JsonApiData {
    return {
      jsonapi: this.jsonapi,
      meta: this.meta,
      data: this.data,
    };
  }

  public setData(data: Data | Data[] | null | []): this {
    this.data = data;

    return this;
  }

  public setDataAsSingle(data: Data | null): this {
    return this.setData(data);
  }

  public setDataAsArray(data: Data[] | []): this {
    return this.setData(data);
  }

  public deserialize(value: object): this {
    value;
    throw new Error('Method not implemented.');
  }
}
