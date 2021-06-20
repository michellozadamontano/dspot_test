//------------------------------------------------------------------------------------------------
// Imports Section (Angular)
//------------------------------------------------------------------------------------------------
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { HttpClientModule }         from '@angular/common/http';
//------------------------------------------------------------------------------------------------
// Imports Section (Routing)
//------------------------------------------------------------------------------------------------
import { AppRoutingModule }         from './app-routing.module';
//------------------------------------------------------------------------------------------------
// Imports Section (Material)
//------------------------------------------------------------------------------------------------
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatIconModule }            from '@angular/material/icon';
import { MatMenuModule }            from '@angular/material/menu';
import { MatButtonModule }          from '@angular/material/button';
import { MatFormFieldModule }       from '@angular/material/form-field';
//------------------------------------------------------------------------------------------------
// Imports Section (Views)
//------------------------------------------------------------------------------------------------
import { AppComponent }             from './app.component';
import { HomeComponent }            from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
