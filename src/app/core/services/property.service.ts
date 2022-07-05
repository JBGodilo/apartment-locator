import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { IPropertyList } from '@models/property/property-list';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  getListIdProperties(listId: number): Observable<IPropertyList> {
    return this.http.get<IPropertyList>(
      `${environment.baseUrl}/List/json/listItems.aspx?listID=${listId}&token=${environment.apiKey}`
    );
  }

  getAllProperties(): Observable<IPropertyList[]> {
    return forkJoin(
      this.http.get<IPropertyList>(
        `${environment.baseUrl}/List/json/listItems.aspx?listID=5638557&token=A0E2523B25B805CBB6F8EC9D98AF56457EE7A255`
      ),
      this.http.get<IPropertyList>(
        `${environment.baseUrl}/List/json/listItems.aspx?listID=5363950&token=5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E`
      )
    );
  }
}
