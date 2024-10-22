import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { FormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponentComponent } from './products-category-qpcomponent/products-category-qpcomponent.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ListCategoriesComponentComponent,
    ContainsPipe, //pipe
    HighlightDirective, NotFoundPageComponentComponent, ProductsCategoryComponent, ProductsCategoryQPComponentComponent, DetailsCategoryComponent, //directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //so i can use ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
