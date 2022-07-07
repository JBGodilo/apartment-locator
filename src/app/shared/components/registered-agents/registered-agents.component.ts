import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { MapService } from '@core/services';
import { IPropertyInfo } from '@models/property/property-info';
import { IPropertyList } from '@models/property/property-list';

@Component({
  selector: 'app-registered-agents',
  templateUrl: './registered-agents.component.html',
  styleUrls: ['./registered-agents.component.css']
})
export class RegisteredAgentsComponent implements OnInit, AfterViewInit {

  @Input() mapContainer!: ElementRef<HTMLElement>;
  @Input() allProperties: IPropertyList[];

  properties: IPropertyInfo[];
  openPanel = 0;

  constructor(private mapService: MapService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }

  selectAgent(accountId?: number) {
    const selectedAgent = this.allProperties.find(property => property.agentInfo.accountID == accountId);
    if (selectedAgent) {
      this.properties = selectedAgent.records;
      this.mapService.loadMap(this.mapContainer.nativeElement, this.properties);
    }
  }

  selectProperty(accountId?: number, propertyId?: number) {
    const selectedPropertyList = this.allProperties.find(p => p.agentInfo.accountID == accountId);
    if (selectedPropertyList) {
      const selectedProperty = selectedPropertyList.records.find(property => property.propertyID == propertyId);
      if (selectedProperty) {
        this.mapService.loadSelectedLocationToMap(selectedProperty);
      }
    }
  }

  setOpenPanel(index: number) {
    this.openPanel = index;
  }

}
