import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumanPositionHistoryComponent } from './pages/human-position-history/human-position-history.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { AreaComponent } from './pages/area/area.component';
import { EmployeComponent } from './pages/employe/employe.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { GroupZoneComponent } from './pages/group-zone/group-zone.component';
import { LocationComponent } from './pages/location/location.component';
import { LodeComponent } from './pages/lode/lode.component';
import { MinefieldsComponent } from './pages/minefields/minefields.component';
import { SectionComponent } from './pages/section/section.component';
import { TypeZoneComponent } from './pages/type-zone/type-zone.component';
import { VidZoneComponent } from './pages/vid-zone/vid-zone.component';
@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule,

    // material
    MatPaginatorModule,
    MatTableModule,
    MatExpansionModule,
    MatDatepickerModule,

    // dateTimePicker
    DpDatePickerModule,
    AngularDateTimePickerModule
  ],
  declarations: [AppComponent, HumanPositionHistoryComponent, AreaComponent, EmployeComponent, EquipmentComponent, GroupZoneComponent, LocationComponent, LodeComponent, MinefieldsComponent, SectionComponent, TypeZoneComponent, VidZoneComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
