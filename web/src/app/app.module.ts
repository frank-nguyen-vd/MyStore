import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./merchant/merchant.module').then((m) => m.MerchantModule),
      },
      { path: '**', redirectTo: 'products' },
    ],
  },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
