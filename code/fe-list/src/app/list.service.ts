import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';
@Injectable()
export class MovieListService{
constructor(private http: Http) { }
private listUrl = 'http://192.168.0.6:8080/get';
getMovies(): Promise <Movie[]> {
    return this.http.get(this.listUrl)
             .toPromise()
             .then(response =>response.json() as Movie[])
             .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  return Promise.reject(error.message || error);
}
}
