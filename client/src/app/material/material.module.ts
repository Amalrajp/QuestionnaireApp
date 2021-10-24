import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule, MatInputModule, MatListModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';


const MaterialComponents = [
  MatIconModule,
  MatTabsModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatListModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule

]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
