import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header';
import { HomeComponent } from './components/home';
import { FooterComponent } from './components/footer';
import { BodyComponent } from './components/body';
import { TodoComponent } from './components/todo/todo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BodyComponent,
    TodoComponent,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
