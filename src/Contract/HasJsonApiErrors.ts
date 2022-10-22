import { HasErrorObjects } from './HasErrorObjects';
import { HasJsonApi } from './HasJsonApi';
import { HasMetaInformation } from './HasMetaInformation';

export interface HasJsonApiErrors
  extends HasJsonApi,
    HasErrorObjects,
    HasMetaInformation {}
