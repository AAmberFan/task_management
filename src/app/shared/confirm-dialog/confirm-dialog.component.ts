import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <h2 mat-dialog-title>{{title}}</h2>
  <div mat-dialog-content>
    {{content}}
  </div>
  <div mat-dialog-actions>
    <button type="button" mat-raised-button color="primary" (click)="onClick(true)">Confirm</button>
    <button type="button" mat-button mat-dialog-close (click)="onClick(false)">Close</button>
  </div>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';

  constructor(
    private diglogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(result: boolean){
    this.diglogRef.close(result);
  }

}
