import { Component } from "@angular/core";

@Component({
    selector : "pp-root",
    templateUrl : "./area-list.component.html",
})

export class AreaListComponent 
{
    pageTitle : string = "List of Parking Areas";
    parking_areas: any[] = 
    [
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
    ];
    
}