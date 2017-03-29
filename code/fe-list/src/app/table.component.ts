import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from './movie';
import {MovieListService} from './list.service';
@Component({
  selector: '<list-table>',
  templateUrl: './table.component.html',
  providers:[ MovieListService ]
})
export class Table implements OnInit{
  item :Movie;
  constructor(private movieListServiece:MovieListService) {}

  getList():void{
    this.movieListServiece.getMovies().then(Movie=>this.item=Movie);
  }

  ngOnInit():void{
    this.getList();
  }

}
