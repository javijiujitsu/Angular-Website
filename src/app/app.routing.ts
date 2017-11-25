import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';

const appRoutes: Routes = [ {
   path: '',
   component: MyHomeComponent
},
{
  path: 'about',
  component: MyAboutComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
