import { ProjectModule } from './project/project.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatSidenavModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { TaskModule } from './task/task.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    TaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
