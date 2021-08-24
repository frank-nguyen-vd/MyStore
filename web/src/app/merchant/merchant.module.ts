import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantComponent } from './merchant.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { MaterialModule } from '../shared/material/material.module';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: MerchantComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [MerchantComponent, ProductsListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
})
export class MerchantModule {}
