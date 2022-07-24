import { Links } from './Links';

export type Data = {
  type: string;
  id: string;
  attributes: object;
  relationships: object;
  links: Links;
};
