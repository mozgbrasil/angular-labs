import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-overlay-basic',
  templateUrl: './cdk-overlay-basic.component.html',
  styleUrls: ['./cdk-overlay-basic.component.scss']
})
export class CdkOverlayBasicComponent implements OnInit {

isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
