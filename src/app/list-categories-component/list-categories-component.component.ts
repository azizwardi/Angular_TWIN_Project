import { Component } from '@angular/core';
import { Category } from '../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categories-component',
  templateUrl: './list-categories-component.component.html',
  styleUrls: ['./list-categories-component.component.css']
})

export class ListCategoriesComponentComponent {
  myDate: Date = new Date();
  title: string= "";

  getDescription(desc:string){
    alert(desc);
  }
  constructor(private router: Router) {}

  viewProducts(categoryId: number) {
    this.router.navigate(['/products', categoryId]);
  }


  categories : Category[]=[
    {"id":1,"title":"Grand électroménager",
    "image":"assets/images/categorie_electromenager.jpg", "description":"description 1",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/images/categorie_petit_electromenager.jpg", "description":"description 2",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/images/categorie_produits_informatiques.jpg", "description":"description 3",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
    "description":"description 4", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/images/categorie_tv_image_son.jpg", "description":"description 5",
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
    "description":"description 6","available":false},
    ]
}
