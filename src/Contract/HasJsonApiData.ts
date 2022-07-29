import { HasCompoundDocuments } from './HasCompoundDocuments';
import { HasJsonApi } from './HasJsonApi';
import { HasLinks } from './HasLinks';
import { HasMetaInformation } from './HasMetaInformation';
import { HasPrimaryData } from './HasPrimaryData';

export interface HasJsonApiData
  extends HasJsonApi,
    HasPrimaryData,
    HasLinks,
    HasCompoundDocuments,
    HasMetaInformation {}
