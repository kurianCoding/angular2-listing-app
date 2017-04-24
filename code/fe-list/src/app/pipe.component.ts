import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
  name:'MoviePipe'
})

export class MoviePipe{
  transform(value,args?){
    let [name]=args;
    return value.filter(Movie=>{
      return Movie.name = name;
    });
  }
}
