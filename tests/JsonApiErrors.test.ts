import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { JsonApiErrors } from '../src/index';
import { TopLevelWithErrors } from '../src/Structure/TopLevel';

describe('when create JsonApiErrors', () => {
  it('can be instantiated', () => {
    const actual = new JsonApiErrors().setErrorsFromNodejs(
      new Error(ReasonPhrases.INTERNAL_SERVER_ERROR)
    );

    expect(actual.httpStatusCode).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(actual.jsonapi).toMatchObject({
      version: '1.0',
    });
    expect(actual.errors[0].status).toBe(
      `${StatusCodes.INTERNAL_SERVER_ERROR}`
    );
    expect(actual.errors[0].title).toBe(ReasonPhrases.INTERNAL_SERVER_ERROR);
  });

  it('can be serialized', () => {
    const actual = new JsonApiErrors().setErrorsFromNodejs(
      new Error(ReasonPhrases.INTERNAL_SERVER_ERROR)
    );

    const expected: TopLevelWithErrors = {
      jsonapi: {
        version: '1.0',
      },
      errors: [
        {
          status: `${StatusCodes.INTERNAL_SERVER_ERROR}`,
          title: ReasonPhrases.INTERNAL_SERVER_ERROR,
        },
      ],
    };

    expect(actual.serialize()).toMatchObject(expected);
  });

  it('can deserializing', () => {
    const serialized: TopLevelWithErrors = {
      jsonapi: {
        version: '1.0',
      },
      errors: [
        {
          status: `${StatusCodes.INTERNAL_SERVER_ERROR}`,
          title: ReasonPhrases.INTERNAL_SERVER_ERROR,
        },
      ],
    };

    const actual = JsonApiErrors.deserialize(serialized);
    const expected = new JsonApiErrors()
      .setJsonapi(serialized.jsonapi)
      .setErrors(serialized.errors);

    expect(actual.httpStatusCode).toBe(expected.httpStatusCode);
    expect(actual.jsonapi).toMatchObject(expected.jsonapi);
    expect(actual.errors[0].status).toBe(expected.errors[0].status);
    expect(actual.errors[0].title).toBe(expected.errors[0].title);
  });
});
