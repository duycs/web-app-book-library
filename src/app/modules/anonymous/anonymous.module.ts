import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AnonymousComponent } from './anonymous.component';

import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: AnonymousComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [
    AnonymousComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AnonymousComponent]
})
export class AnonymousModule { }
