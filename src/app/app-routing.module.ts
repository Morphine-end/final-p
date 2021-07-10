import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PageContentComponent } from './page-content/page-content.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [ 
  { path: "main",
    component: MainPageComponent,
  },
  {
    path: "navbar",
    component: NavbarComponent

  },
  {path:'main/content', 
  component: PageContentComponent
  },
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
