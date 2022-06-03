import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/shared/header/header.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { NavComponent } from './componentes/shared/nav/nav.component';
import { FiltersComponent } from './componentes/bookstore-app/filters/filters.component';
import { ProductsListComponent } from './componentes/bookstore-app/products-list/products-list.component';
import { BookstoreAppComponent } from './componentes/bookstore-app/bookstore-app.component';
import { ProductItemComponent } from './componentes/bookstore-app/products-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';

import {BooksService} from './componentes/bookstore-app/products-list/products-list.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    ProductsListComponent,
    BookstoreAppComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
