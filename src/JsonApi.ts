import { StatusCodes } from 'http-status-codes';
import { AbstractJsonApi } from './AbstractJsonApi';
import { HasData } from './Contract/HasData';
import {
  DataArray,
  DataSingle,
  DataType,
  JsonApiData,
} from './Structure/JsonApiData';

/**
 * @see: https://jsonapi.org/format
 */
export class JsonApi extends AbstractJsonApi implements HasData {
  public httpStatusCode: number = StatusCodes.OK;

  public data: DataType;

  public setData(data: DataSingle | DataArray): this {
    this.data = data;

    return this;
  }

  public setDataAsSingle(data: DataSingle): this {
    return this.setData(data);
  }

  public setDataAsArray(data: DataArray): this {
    return this.setData(data);
  }

  public serialize(): JsonApiData {
    return {
      jsonapi: this.jsonapi,
      meta: this.meta,
      data: this.data,
    };
  }

  public deserialize(value: object): this {
    value;
    throw new Error('Method not implemented.');
  }
}
