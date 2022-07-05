import { IFloorPlan } from "./floor-plans";
import { IGeoCode } from "./geocode";

export interface IPropertyInfo {
  city: string;
  favorite: boolean;
  floorPlans: IFloorPlan[];
  geocode: IGeoCode;
  highValueAmenities: string[];
  highestSentCommisions: number;
  listID: number;
  management: string;
  name: string;
  onsiteManager: string,
  order: number;
  paidUtilities: string[];
  pets: boolean;
  photo: string;
  propertyID: number;
  proximity: number;
  section8: boolean;
  seniorHousing: boolean;
  state: string;
  streetAddress: string;
  studentHousing: boolean;
  washerDry: string;
}