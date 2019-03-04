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
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
    ],
  imports: [
    HttpClientModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
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
