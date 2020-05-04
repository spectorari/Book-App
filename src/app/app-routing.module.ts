import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TocComponent } from './toc/toc.component';
import { ChapteroneComponent } from './chapterone/chapterone.component';
import { ChaptertwoComponent } from './chaptertwo/chaptertwo.component';
import { ChapterthreeComponent } from './chapterthree/chapterthree.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'toc',
    component: TocComponent 
  },
  {
    path:'chapterone',
    component:ChapteroneComponent
  },
  {
    path: 'chaptertwo',
    component: ChaptertwoComponent
  },
  {
    path: 'chapterthree',
    component: ChapterthreeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TocComponent, ChapteroneComponent, ChaptertwoComponent, ChapterthreeComponent]
