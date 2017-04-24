import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
  name:'moviePipe'
})

export class MoviePipe{
  transform(value,args?){
    let [name]=args;
    return value.filter(Movie=>{
      return Movie.name = name;
    });
  }
}
