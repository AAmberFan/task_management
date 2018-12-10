import { DomSanitizer } from '@angular/platform-browser';
import {
  MatIconRegistry
} from '@angular/material';

export const loadSvgResource = (ir: MatIconRegistry, ds: DomSanitizer)=>{
  const imgDir = 'assets/img';
  const sidebarDir = `${imgDir}/sidebar`;

    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`));
};