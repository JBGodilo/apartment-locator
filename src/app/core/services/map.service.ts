import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { IGeoJSON } from '@models/property/geo-feature';
import { IPropertyInfo } from '@models/property/property-info';
import { Map, NavigationControl, Marker, Popup } from 'maplibre-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: Map | undefined
  previousLocationData: IPreviousLocationData;

  constructor() { 
    this.getCurrentLocation();
  }

  public loadMap(mapContainerElement: string | HTMLElement, properties?: IPropertyInfo[], zoom?: number): void {

    if(properties && properties.length > 0) {
      const initialState = { lng: properties[0].geocode.Longitude, lat: properties[0].geocode.Latitude, zoom: zoom ? zoom : 11 };
      this.initMap(mapContainerElement, initialState, properties);
      
    } else {
      this.getCurrentLocation().then(location => {
        let initialState: any = { };
        
        if (location) {
          initialState.lng = location.lng;
          initialState.lat = location.lat;
          initialState.zoom = zoom ? zoom : 11;
        }

        this.initMap(mapContainerElement, initialState);
      })
    }
  }

  public loadSelectedLocationToMap(propertyInfo: IPropertyInfo): void {
    const coordinates: [number, number] = [propertyInfo.geocode.Longitude, propertyInfo.geocode.Latitude];
    this.map!.flyTo({
      center: coordinates,
      zoom: 17,
      duration: 1000,
      essential: true,
    });

    if (this.previousLocationData) {
      this.setMarker(
        this.previousLocationData.coordinates, 
        this.previousLocationData.favorite, 
        this.previousLocationData.title, 
        this.previousLocationData.description, 
        'marker'
      );  
    }

    this.setMarker(coordinates, propertyInfo.favorite, propertyInfo.name, propertyInfo.streetAddress, 'marker-selected');
    this.previousLocationData = {
      coordinates,
      favorite: propertyInfo.favorite,
      title: propertyInfo.name,
      description: propertyInfo.streetAddress
    };
  }

  public clearMap(): void {
    this.map?.remove();
  }

  private getCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        currentPosition => {
          resolve({ lng: currentPosition.coords.longitude, lat: currentPosition.coords.latitude });
        },
        err => reject(err));
    });
  }

  private initMap(
    mapContainerElement: HTMLElement | string, 
    initialState: { lng: number, lat: number, zoom: number }, 
    properties?: IPropertyInfo[]
  ): void {
    this.map = new Map({
      container: mapContainerElement,
      style: environment.mapStyle,
      center: { lng: initialState.lng, lat: initialState.lat },
      zoom: initialState.zoom
    });

    this.map.addControl(new NavigationControl());
    
    if (properties) {
      this.addMarker(properties);
    }
  }

  private addMarker(properties: IPropertyInfo[]): void {

    let features: any[] = [];
    
    properties.forEach(propertyInfo => {
      features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [propertyInfo.geocode.Longitude, propertyInfo.geocode.Latitude]
        },
        properties: {
          title: propertyInfo?.name,
          description: propertyInfo?.streetAddress,
          isFavorite: propertyInfo.favorite
        }
      })
    })

    const geoJson: IGeoJSON = {
      type: 'FeatureCollection',
      features: features
    }

    geoJson.features.forEach(feature => {
      this.setMarker(feature.geometry.coordinates, feature.properties.isFavorite, feature.properties.title, feature.properties.description);
    })

    var bounds = this.map!.getBounds();
    this.map!.fitBounds(bounds);
  }

  private setMarker(coordinates: [number, number], isFavorite: boolean, title?: string, description?: string, markerStyle: string = 'marker') {
    const el = document.createElement("div")
    el.className = markerStyle;

    if (isFavorite) {
      const favoriteEl = document.createElement("div");
      favoriteEl.className = "heart";
      favoriteEl.id = "heart" + coordinates[0] + coordinates[1];
      el.appendChild(favoriteEl);
    }

    var newMarker = new Marker(el).setLngLat(coordinates)
    
    if (title && description && title.trim().length > 0 && description.trim().length > 0) {
      newMarker.setPopup(new Popup({ offset: 25 })
        .setHTML(
          `<h3>${title}</h3><p>${description}</p>`
        ));
    }
    
    newMarker.addTo(this.map!);
  }

}

interface IPreviousLocationData {
  coordinates: [number, number];
  favorite: boolean;
  title: string;
  description: string;
}
