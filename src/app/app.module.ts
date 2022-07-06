
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { PropertyListsEffects } from './store/property-lists.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/reducers';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    MatExpansionModule,
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
