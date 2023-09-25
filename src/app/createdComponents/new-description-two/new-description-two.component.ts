import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-description-two',
  templateUrl: './new-description-two.component.html',
  styleUrls: ['./new-description-two.component.css'],
})
export class NewDescriptionTwoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('new-description-two component has been initiated');
  }
}
