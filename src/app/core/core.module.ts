import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PropertyListsEffects } from '../store/effects/property-lists.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from '../store';
import { environment } from '@env/environment';
import * as fromStore from '../store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forRoot([PropertyListsEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('propertyLists', fromStore.propertyListsReducer),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 15
    }) : []
  ]
})
export class CoreModule { }
