import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsContainerComponent } from './settings';
import { HumanPositionHistoryComponent } from './pages/human-position-history/human-position-history.component';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'human-pos',
    pathMatch: 'full'
  },
  {
    path: 'human-pos',
    component: HumanPositionHistoryComponent,
    data: { title: 'anms.menu.menuHuman' }
  },
  {
    path: 'area',
    component: AreaComponent,
  },
  {
    path: 'employe',
    component: EmployeComponent,
  },
  {
    path: 'equipment',
    component: EquipmentComponent,
  },
  {
    path: 'group-zone',
    component: GroupZoneComponent,
  },
  {
    path: 'location',
    component: LocationComponent,
  },
  {
    path: 'lode',
    component: LodeComponent,
  },
  {
    path: 'minefields',
    component: MinefieldsComponent,
  },
  {
    path: 'section',
    component: SectionComponent,
  },
  {
    path: 'type-zone',
    component: TypeZoneComponent,
  },
  {
    path: 'vid-zone',
    component: VidZoneComponent,
  },
  {
    path: 'settings',
    component: SettingsContainerComponent,
    data: { title: 'anms.menu.settings' }
  },
  {
    path: 'examples',
    loadChildren: 'app/examples/examples.module#ExamplesModule'
  },
  {
    path: '**',
    redirectTo: 'human-pos'
  }
];


@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
