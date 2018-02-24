import { Injectable } from '@angular/core';
import { IParkingArea } from './parking-area';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ParkingAreaService {

    private url: string = "http://localhost:4000/api/areas";

    constructor(private _httpClient: HttpClient) {
    }

    getParkingAreas() {
        return this._httpClient.get(this.url);
   }

}