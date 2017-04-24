import { Component,Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from './movie';
import {MovieListService} from './list.service';

@Component({
  selector: '<list-table>',
  templateUrl: './table.component.html',
  providers:[ MovieListService ],
})
export class Table implements OnInit{
  @Input('name')name :string;
  @Input('genere')genere: string;
  @Input('price')price: string;
  item :Movie[];
  order:string;
  reverse:boolean;
  constructor(private movieListServiece:MovieListService) {}

  getList():void{
    this.movieListServiece.getMovies().then(result=>{this.item=result;});
  }

  ngOnInit():void{
    this.getList();
    this.order='name';
    this.reverse=false;
  }
  toName():void{
    this.order='name';
    this.reverse=!this.reverse;
  }
  toGenere():void{
    this.order='genere';
    this.reverse=!this.reverse;
  }

  toPrice():void{
    this.order='price';
    this.reverse=!this.reverse;
  }

}
