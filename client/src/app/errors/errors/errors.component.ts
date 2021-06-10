import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  serverError(){
    this.http.get("https://localhost:5001/api/buggy/server-error").subscribe(
      response => {
        console.log(response);
      },error=> {
        console.log(error);
      })
  }

}
