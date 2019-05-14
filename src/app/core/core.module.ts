import { loadSvgResource } from './../utils/svg.util';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { MatIconRegistry } from '@angular/material';
import 'hammerjs';
import { take } from 'rxjs/operators';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '../services/services.module';
import 'util/debug.util';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
    ],
  imports: [
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServicesModule.forRoot()

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers:[
    {provide: 'BASE_CONFIG', useValue:{
      uri:  'http://localhost:3000'
    }}
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
  ir: MatIconRegistry, ds: DomSanitizer
   ) {
    if (parent) {
      throw new Error('Module already exit');
    }
    loadSvgResource(ir, ds);
  }
}
