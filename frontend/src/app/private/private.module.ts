import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MatListModule } from '@angular/material/list'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateRoomComponent } from './components/create-room/create-room.component'; 
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateRoomComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
	MatListModule,
	MatPaginatorModule,
	MatCardModule,
	MatButtonModule,
	ReactiveFormsModule,
	MatFormFieldModule,
	MatInputModule,
	MatChipsModule,
	MatAutocompleteModule,
	MatIconModule
  ]
})
export class PrivateModule { }
