import { Injectable } from '@angular/core';
import { IParkingArea } from './parking-area';

@Injectable()
export class ParkingAreaService {

    getParkingAreas(): IParkingArea[] {
        return [
            {
                "name": "Canteen Area",
                "id": 1,
                "available_spots": 2
            },
            {
                "name": "Main Area",
                "id": 2,
                "available_spots": 1
            }
        ]
    }

}