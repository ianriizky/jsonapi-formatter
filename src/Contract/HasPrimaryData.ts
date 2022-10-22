import { PrimaryData } from '../Structure/PrimaryData';
import {
  ResourceObjects,
  ResourceObjectsArray,
  ResourceObjectsNull,
} from '../Structure/ResourceObjects';

export interface HasPrimaryData {
  get dataAsObject(): ResourceObjects | ResourceObjectsNull;
  get dataAsArray(): ResourceObjectsArray;
  setData(data?: PrimaryData): this;
}
