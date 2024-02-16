import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbrComponent } from './components/sharedComponetns/navbr/navbr.component';
import { FooterComponent } from './components/sharedComponetns/footer/footer.component';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NotFoundComponent } from './components/sharedComponetns/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './components/products-list/products-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbrComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductsFormComponent,
    ProductItemComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,FormsModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
