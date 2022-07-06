import { IPropertyList } from "@models/property/property-list";
import { PropertyListActionTypes, PropertyListsAction } from "./property-lists.action";

export interface IPropertyListsState {
  data: IPropertyList[];
  isLoading: boolean;
  message: string;
}

const initialState: IPropertyListsState = {
  data: [],
  isLoading: false,
  message: ''
}

export function propertyListsReducer(state = initialState, action: PropertyListsAction): IPropertyListsState {
  switch (action.type) {

    case PropertyListActionTypes.GetAllPropertyLists:
      return {
        ...state,
        isLoading: true
      };

    case PropertyListActionTypes.GetAllPropertyListsSuccess:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        message: 'Data fetch successfully!'
      };
    
    case PropertyListActionTypes.GetAllPropertyListsFail:
      return {
        ...state,
        data: [],
        isLoading: false,
        message: 'Something went wrong!'
      };
  
    default:
      return state;
  }
}
