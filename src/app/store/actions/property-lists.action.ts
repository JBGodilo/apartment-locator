import { HttpErrorResponse } from "@angular/common/http";
import { IPropertyList } from "@models/property/property-list";
import { Action } from "@ngrx/store";

export enum PropertyListActionTypes {
  GetAllPropertyLists = '[Property List] Get All Property Lists',
  GetAllPropertyListsSuccess = '[Property List] Get All Property Lists Sucess',
  GetAllPropertyListsFail = '[Property List] Get All Property Lists Fail',
  GetListProperties = '[Property List] Get List Properties'
}

export class GetAllPropertyLists implements Action {
  public readonly type = PropertyListActionTypes.GetAllPropertyLists;
}

export class GetAllPropertyListsSuccess implements Action {
  public readonly type = PropertyListActionTypes.GetAllPropertyListsSuccess;
  
  constructor(public payload: IPropertyList[]) {}
}

export class GetAllPropertyListsFail implements Action {
  public readonly type = PropertyListActionTypes.GetAllPropertyListsFail;

  constructor(public error: HttpErrorResponse) {}
}

export type PropertyListsAction = GetAllPropertyLists | GetAllPropertyListsSuccess | GetAllPropertyListsFail;
