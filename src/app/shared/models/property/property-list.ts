import { IAgentInfo } from "./agent-info";
import { IPropertyInfo } from "./property-info";

export interface IPropertyList {
  agentInfo: IAgentInfo;
  body: string;
  records: IPropertyInfo[];
  role: string;
  showContactInfo: boolean;
  title: string;
}