import { StatusCodes } from 'http-status-codes';
import { JsonApiData } from '../src/index';
import {
  ResourceObjects,
  ResourceObjectsArray,
} from '../src/Structure/ResourceObjects';

describe('when create JsonApiData', () => {
  it('can be instantiated as object', () => {
    const data: ResourceObjects = {
      type: 'users',
      id: '1',
      attributes: {
        username: 'antropologi_user',
        name: 'Antropologi User',
        email: 'antropologi_user@antropologi.com',
        password: 'antropologi',
      },
    };

    const actual = new JsonApiData().setData(data);

    expect(actual.httpStatusCode).toBe(StatusCodes.OK);
    expect(actual.jsonapi).toMatchObject({
      version: '1.0',
    });
    expect(actual.dataAsObject?.type).toBe(data.type);
    expect(actual.dataAsObject?.id).toBe(data.id);
  });

  it('can be instantiated as array', () => {
    const data: ResourceObjectsArray = [
      {
        type: 'users',
        id: '1',
        attributes: {
          username: 'antropologi_user',
          name: 'Antropologi User',
          email: 'antropologi_user@antropologi.com',
          password: 'antropologi',
        },
      },
    ];

    const actual = new JsonApiData().setData(data);

    expect(actual.httpStatusCode).toBe(StatusCodes.OK);
    expect(actual.jsonapi).toMatchObject({
      version: '1.0',
    });
    expect(actual.dataAsArray[0]?.type).toBe(data[0]?.type);
    expect(actual.dataAsArray[0]?.id).toBe(data[0]?.id);
  });
});
