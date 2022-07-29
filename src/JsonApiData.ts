import { HasJsonApiData } from './Contract/HasJsonApiData';
import { JsonApi } from './JsonApi';
import { CompoundDocuments } from './Structure/CompoundDocuments';
import { Links } from './Structure/Links';
import { MetaInformation } from './Structure/MetaInformation';
import { PrimaryData } from './Structure/PrimaryData';
import { TopLevelWithData } from './Structure/TopLevel';

/**
 * @see: https://jsonapi.org/format
 */
export class JsonApiData extends JsonApi implements HasJsonApiData {
  public data: PrimaryData = null;
  public links!: Links;
  public included!: CompoundDocuments;
  public meta?: MetaInformation;

  public setData(data?: PrimaryData): this {
    if (data) {
      this.data = data;
    }

    return this;
  }

  public setLinks(links?: Links): this {
    if (links) {
      this.links = links;
    }

    return this;
  }

  public setIncluded(included?: CompoundDocuments): this {
    if (included) {
      this.included = included;
    }

    return this;
  }

  public setMeta(meta?: MetaInformation): this {
    if (meta) {
      this.meta = meta;
    }

    return this;
  }

  public serialize(): TopLevelWithData {
    return {
      ...super.serialize(),
      data: this.data,
      links: this.links,
      included: this.included,
      meta: this.meta,
    };
  }

  public deserialize(serialize: TopLevelWithData): this {
    return super
      .deserialize(serialize)
      .setData(serialize.data)
      .setLinks(serialize.links)
      .setIncluded(serialize.included)
      .setMeta(serialize.meta);
  }
}
