import { CompoundDocuments } from '../Structure/CompoundDocuments';

export interface HasCompoundDocuments {
  setIncluded(included?: CompoundDocuments): this;
}
