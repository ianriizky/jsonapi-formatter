import { Config } from './Config';
import { HasJsonApiMeta } from './Contract/HasJsonApiMeta';
import { JsonApi } from './JsonApi';
import { MetaInformation } from './Structure/MetaInformation';
import { TopLevelWithMeta } from './Structure/TopLevel';

export class JsonApiMeta extends JsonApi implements HasJsonApiMeta {
  public meta: MetaInformation = {};

  public setMeta(meta?: MetaInformation): this {
    if (meta) {
      this.meta = meta;
    }

    return this;
  }

  public serialize(): TopLevelWithMeta {
    return {
      ...super.serialize(),
      meta: this.meta,
    };
  }

  public deserialize(serialize: TopLevelWithMeta): this {
    return super.deserialize(serialize).setMeta(serialize.meta);
  }

  public static deserialize(
    serialize: TopLevelWithMeta,
    config?: Config
  ): JsonApiMeta {
    return new this(config).deserialize(serialize);
  }
}
