import { Config } from './Config';
import { HasJsonApiData } from './Contract/HasJsonApiData';
import { JsonApi } from './JsonApi';
import { CompoundDocuments } from './Structure/CompoundDocuments';
import { Links } from './Structure/Links';
import { MetaInformation } from './Structure/MetaInformation';
import { PaginationLinks } from './Structure/PaginationLinks';
import { PrimaryData } from './Structure/PrimaryData';
import {
  ResourceObjects,
  ResourceObjectsArray,
  ResourceObjectsNull,
} from './Structure/ResourceObjects';
import { TopLevelWithData } from './Structure/TopLevel';

/**
 * @see: https://jsonapi.org/format
 */
export class JsonApiData extends JsonApi implements HasJsonApiData {
  protected data: PrimaryData = null;
  public links!: Links | PaginationLinks;
  public included!: CompoundDocuments;
  public meta?: MetaInformation;

  public get dataAsObject(): ResourceObjects | ResourceObjectsNull {
    if (Array.isArray(this.data)) {
      return this.data[0];
    }

    return this.data;
  }

  public get dataAsArray(): ResourceObjectsArray {
    if (!Array.isArray(this.data)) {
      return [];
    }

    return this.data;
  }

  public setData(data: PrimaryData): this {
    this.data = data;

    return this;
  }

  public setLinks(links?: Links | PaginationLinks): this {
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

  public static deserialize(
    serialize: TopLevelWithData,
    config?: Config
  ): JsonApiData {
    return new this(config).deserialize(serialize);
  }
}
