import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantComponent } from './merchant.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MerchantComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [MerchantComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MerchantModule {}
