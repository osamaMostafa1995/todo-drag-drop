import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './Componets/todos/todos.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SidebarComponent } from './Core/sidebar/sidebar.component';
import { NavComponent } from './Core/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SignInComponent,
    SidebarComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
