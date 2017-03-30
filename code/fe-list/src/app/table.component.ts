import { Component,Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from './movie';
import {MovieListService} from './list.service';
import {MoviePipe} from './pipe.component';
@Component({
  selector: '<list-table>',
  templateUrl: './table.component.html',
  providers:[ MovieListService ]
})
export class Table implements OnInit{
  @Input('name')name :string;
  @Input('genere')genere: string;
  @Input('price')price: string;
  item :Movie[];
  constructor(private movieListServiece:MovieListService) {}

  getList():void{
    this.movieListServiece.getMovies().then(result=>{this.item=result;});
  }

  ngOnInit():void{
    this.getList();
  }

}
