import { Injectable } from "@angular/core";
import { PropertyService } from "@core/services";
import { IPropertyList } from "@models/property/property-list";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { GetAllPropertyListsFail, GetAllPropertyListsSuccess, PropertyListActionTypes } from "./property-lists.action";

@Injectable()
export class PropertyListsEffects {

  constructor(private action$: Actions, private propertyService: PropertyService) {}

  @Effect()
  getAllPropertyLists$: Observable<Action> = this.action$.pipe(
    ofType(PropertyListActionTypes.GetAllPropertyLists),
    mergeMap(() => 
      this.propertyService.getAllProperties().pipe(
        map((propertyLists: IPropertyList[]) => new GetAllPropertyListsSuccess(propertyLists)),
        catchError((error) => of(new GetAllPropertyListsFail(error)))
      )
    )
  );

}
