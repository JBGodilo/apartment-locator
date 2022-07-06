import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MapService, PropertyService } from '@core/services';
import { IPropertyInfo } from '@models/property/property-info';
import { IPropertyList } from '@models/property/property-list';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @ViewChild('map') mapContainer!: ElementRef<HTMLElement>;
  properties: IPropertyInfo[];
  allProperties: IPropertyList[];

  constructor(
    private mapService: MapService, 
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.propertyService.getAllProperties()
      .subscribe(allProperties => {
        if (allProperties) {
          this.allProperties = allProperties;
          this.properties = allProperties[0].records;
          this.mapService.loadMap(this.mapContainer.nativeElement, this.properties);
        }
      });
  }

  ngOnDestroy() {
    this.mapService.clearMap();
  }

}
