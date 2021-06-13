import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServ } from '../../services/httpserv.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router, private httpserv: HttpServ) {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
    this.httpserv.getMoviesList(form.value.search).then(d => {
      var parsedobj = JSON.parse(JSON.stringify(d));
      //   this.movies = parsedobj.Search;
      console.log(parsedobj.Search);
    });
  }
}
