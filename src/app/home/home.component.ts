import { Component, OnInit } from '@angular/core';
import{faPhoenixSquadron}from '@fortawesome/free-brands-svg-icons';

import 'animate.css';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faPhone=faPhoenixSquadron;

  constructor() { }

  ngOnInit(): void {
    
  }

}
