import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContainerComponent } from './components/layout/main-container/main-container.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from "./components/home/home.component";
import { DescriptionComponent } from './components/description/description.component';
import { GuardsListComponent } from './components/guards-list/guards-list.component';
import { CalendarComponent } from './calendar';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    HomeComponent,
    BodyComponent,
    FooterComponent,


],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
