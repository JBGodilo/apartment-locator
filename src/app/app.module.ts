
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PropertyListsEffects } from './store/effects/property-lists.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import * as fromStore from './store';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    MaterialModule,
    EffectsModule.forRoot([PropertyListsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 15
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('propertyLists', fromStore.propertyListsReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
