import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { MaterialModule } from '../shared/material/material.module';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductsListComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  declarations: [
    ProductsListComponent,
    ToolbarComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
})
export class ShopModule {}
