import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rajbhar-history',
  templateUrl: './rajbhar-history.component.html',
  styleUrls: ['./rajbhar-history.component.scss'],
})
export class RajbharHistoryComponent implements OnInit {
  historiesArrObj: any;
  constructor() {
    this.historiesArrObj = [
      {
        title: 'भारशिव वंश',
        url: '',
      },
      {
        title: 'भर जाति  के उपनाम',
        url: '',
      },

      {
        title: 'भार -भूतेश एवं भार तीर्',
        url: '',
      },
      {
        title: 'भरत जाति',
        url: '',
      },
      {
        title: 'अंग्रेज इतिहासकार',
        url: '',
      },
      {
        title: 'महाराजा भारद्वाज',
        url: '',
      },
      {
        title: 'महाराज वीरसेन भारशिव',
        url: '',
      },
      {
        title: 'भारत का नामकरण',
        url: '',
      },
      {
        title: 'भारत का नामकरण',
        url: '',
      },
      {
        title: 'जाति एक नाम',
        url: '',
      },
      {
        title: 'नाग्भारशिव जाति',
        url: '',
      },
      {
        title: 'भर और संविधान',
        url: '',
      },
    ];
  }
  ngOnInit(): void {}
}
