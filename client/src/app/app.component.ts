import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The dating app';
  users: any;

  constructor(private accountService: AccountService ){}
  
  ngOnInit(){
    this.setCurrentUser();
  }

  setCurrentUser(){
    var tempvr = localStorage.getItem("user");
    if (tempvr == null){
      //console.log('in null check');
      this.accountService.setCurrentUser(null as any);
    }
    else{
      const usee = JSON.parse(tempvr);
      this.accountService.setCurrentUser(usee);
    }
  }
  
}