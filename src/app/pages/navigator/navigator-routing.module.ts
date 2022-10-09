import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigatorPage } from './navigator.page';

const routes: Routes = [
  {
    path: '',
		component: NavigatorPage,
		children: [
			{
        path: 'folder',
        loadChildren: () => import('../../folder/folder.module').then( m => m.FolderPageModule)
      },
      {
        path: 'folder',
        loadChildren: () => import('../../folder/folder.module').then( m => m.FolderPageModule)
      },
			{
			path: '',
			redirectTo: '/navigator/folder',
			pathMatch: 'full'
			}
		]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigatorPageRoutingModule {}
