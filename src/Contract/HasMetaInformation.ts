import { MetaInformation } from '../Structure/MetaInformation';

export interface HasMetaInformation {
  setMeta(meta?: MetaInformation): this;
}
