import { Component } from "@angular/core";
import { IParkingArea } from "./parking-area";
import { ParkingAreaService } from "./parking-area.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector : "pp-root",
    templateUrl : "./area-list.component.html",
})

export class AreaListComponent  implements OnInit
{
    
    pageTitle : string = "List of Parking Areas";
    parkingAreas : IParkingArea[];

    constructor(private _parkingAreaService : ParkingAreaService) {
    }

    ngOnInit(): void {
        this._parkingAreaService.getParkingAreas();
    }

   
}