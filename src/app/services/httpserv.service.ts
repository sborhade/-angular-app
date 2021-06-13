import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { environment } from '../../environments/env';
import { Movies } from '../Models/Movies';

@Injectable({
  providedIn: 'root'
})
export class HttpServ {
  constructor(private http: HttpClient) {}

  getMoviesList(search?: string) {
    return (
      this.http
        .get(`${environment.BASE_URL}&s=${search}`)
        //.pipe(map(data)=> {data});
        .toPromise()
        .then(res => {
          // Success
          //console.log('res');
          console.log(res);
          ///resolve();
          return res;
        })
    );
  }

  getConfigResponse() {
    return this.http
      .get(environment.BASE_URL, {
        observe: 'response',
        responseType: 'json'
      })
      .subscribe(
        movies => {
          //this.movies = movies;
          //console.log('movies');
          console.log(JSON.stringify(movies));
        },
        error => {
          console.log('error');
          console.log(
            JSON.stringify(error, ['message', 'arguments', 'type', 'name'])
          );
        }
      );
  }

  /* GET heroes whose name contains search term */
  searchMovies(term: string): Observable<Movies[]> {
    //term = term.trim();
    //const options = term ? { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Movies[]>(`${environment.BASE_URL}$s=&${term}`);
    // .pipe
    // //catchError(this.handleError<Movies[]>('searchHeroes', []))
    // ();
  }

  findMovieByTitle(title) {
    const url = `https://www.omdbapi.com/?s=${title}&apikey=453b231`;
    var t = fetch(environment.BASE_URL)
      .then(res => {
        res.json();
        console.log(res);
      })
      .catch(err => console.log('Error! :D', err));

    console.log(t);
  }
}
