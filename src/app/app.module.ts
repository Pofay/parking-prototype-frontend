import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AreaListComponent } from './areas/area-list.component';
import { ParkingAreaService } from './areas/parking-area.service';


@NgModule({
  declarations: [
    AppComponent,
    AreaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ParkingAreaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
