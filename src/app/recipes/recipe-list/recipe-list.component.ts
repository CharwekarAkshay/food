import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipie.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Recipe('Test Recipe 2', 'This is again a test recipe',
    'https://c.pxhere.com/images/7a/68/166bae10efb2ba7e072ca553b907-1589195.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
