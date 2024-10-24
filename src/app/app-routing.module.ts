import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { ProductsCategoryQPComponentComponent } from './products-category-qpcomponent/products-category-qpcomponent.component';

const routes: Routes = [
  {path:"home", component:HomeComponentComponent, children:[
    {path:"category/:id", component:DetailsCategoryComponent}
]},
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:'products', loadChildren: () => import('./product-module/product-module.module').then(m=>m.ProductModuleModule)},
  {path:'contact', loadChildren: ()=>import('./contact-module/contact-module.module').then(m=>m.ContactModuleModule)},
  {path:'profile', loadChildren: ()=>import('./profile-module/profile-module.module').then(m=>m.ProfileModuleModule)},
  {path:'apropos', loadChildren: ()=>import('./apropos-module/apropos-module.module').then(m=>m.AproposModuleModule)},
  {path:"products/:id", component:ProductsCategoryComponent},
  {path:"products", component:ProductsCategoryQPComponentComponent},
  {path:"**", component:NotFoundPageComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
