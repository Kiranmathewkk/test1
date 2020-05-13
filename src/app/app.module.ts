import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProductsComponent } from './products/products.component';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideNavComponent,
    HeaderComponent,
    DashboardComponent,
    HomeSectionComponent,
    InboxComponent,
    ProductsComponent
  ],
  exports:[
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    CardModule,
    NgxYoutubePlayerModule.forRoot(),
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
