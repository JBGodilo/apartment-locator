import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';
import { MapService } from '@core/services';
import { IPropertyList } from '@models/property/property-list';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @ViewChildren('map') mapContainer!: QueryList<HTMLElement>;

  public loadedMapContainer: ElementRef<HTMLElement>;

  propertyListsData: IPropertyList[] = [];
  public isLoading: boolean = true;

  constructor(
    private mapService: MapService, 
    private store: Store<fromStore.IPropertyListsState>
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.store.dispatch(new fromStore.GetAllPropertyLists());
    const propertyLists$ = this.store.pipe(select(fromStore.allPropertyLists))

    propertyLists$.subscribe(res => {
      if (res) {
        this.propertyListsData = res.data;
        this.isLoading = res.isLoading;
        if (this.propertyListsData.length) {
          this.mapContainer.changes.subscribe(
            (map) => {
              this.loadedMapContainer = map.first;
              this.mapService.loadMap(this.loadedMapContainer.nativeElement, this.propertyListsData[0].records);
            }
          )
        }
      }
    });
  }

  ngOnDestroy() {
    this.mapService.clearMap();
  }

}
