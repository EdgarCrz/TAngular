import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
