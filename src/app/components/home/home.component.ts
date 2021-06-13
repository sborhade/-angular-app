import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpServ } from '../../services/httpserv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sort: string;
  movies = [];
  constructor(
    private httpserv: HttpServ,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['search']) {
        this.httpserv.getMoviesList(params['search']).then(d => {
          var parsedobj = JSON.parse(JSON.stringify(d));
          this.movies = parsedobj.Search;
          console.log(parsedobj.Search);
        });
      }
    });

    // .subsr(data => {
    //   var obj = JSON.stringify(data);
    //   var json = obj.Search;
    //   console.log(json);
    // });
    // var parsedobj = JSON.parse(JSON.stringify(data));
    // return parsedobj.Search;

    // data.then(d => {
    //   var parsedobj = JSON.parse(JSON.stringify(d));
    //   this.movies = parsedobj.Search;
    //   console.log(parsedobj.Search);
    // });
  }
}
