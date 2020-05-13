import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  
  {path:"dashboard",component:DashboardComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'home',component:HomeSectionComponent},
  {path:'inbox',component:InboxComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
