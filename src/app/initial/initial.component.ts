import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {

  }
  navigateToLogin(){
    this.route.navigateByUrl('/login');
  }
  navigateToRegister(){
    this.route.navigateByUrl('/register');
  }

}
