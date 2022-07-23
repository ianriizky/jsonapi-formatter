export class JsonApi {
  static jsonapi: object = {
    version: '1.0',
  };

  data: object = {};

  static serialize() {
    return { jsonapi: this.jsonapi };
  }
}
