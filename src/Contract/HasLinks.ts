import { Links } from '../Structure/Links';

export interface HasLinks {
  setLinks(links?: Links): this;
}
