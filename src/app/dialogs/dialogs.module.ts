import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { MatDialogModule, MatButtonModule, MatIconModule, MatSlideToggleModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [SettingsDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  exports: [SettingsDialogComponent],
  entryComponents: [SettingsDialogComponent]
})
export class DialogsModule { }
