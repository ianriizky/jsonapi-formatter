import { StatusCodes } from 'http-status-codes';
import { JsonApiMeta } from '../src/index';
import { TopLevelWithMeta } from '../src/Structure/TopLevel';

describe('when create JsonApiMeta', () => {
  it('can be instantiated', () => {
    const actual = new JsonApiMeta().setMeta({
      token: '12345',
    });

    expect(actual.httpStatusCode).toBe(StatusCodes.OK);
    expect(actual.jsonapi).toMatchObject({
      version: '1.0',
    });
    expect(actual.meta.token).toBe('12345');
  });

  it('can be serialized', () => {
    const actual = new JsonApiMeta().setMeta({
      token: '12345',
    });

    const expected: TopLevelWithMeta = {
      jsonapi: {
        version: '1.0',
      },
      meta: {
        token: '12345',
      },
    };

    expect(actual.serialize()).toMatchObject(expected);
  });

  it('can deserializing', () => {
    const serialized: TopLevelWithMeta = {
      jsonapi: {
        version: '1.0',
      },
      meta: {
        token: '12345',
      },
    };

    const actual = JsonApiMeta.deserialize(serialized);
    const expected = new JsonApiMeta()
      .setJsonapi(serialized.jsonapi)
      .setMeta(serialized.meta);

    expect(actual.httpStatusCode).toBe(expected.httpStatusCode);
    expect(actual.jsonapi).toMatchObject(expected.jsonapi);
    expect(actual.meta).toBe(expected.meta);
  });
});
