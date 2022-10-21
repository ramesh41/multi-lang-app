import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rajbhar-history',
  templateUrl: './rajbhar-history.component.html',
  styleUrls: ['./rajbhar-history.component.scss'],
})
export class RajbharHistoryComponent implements OnInit {
  historiesArrObj: any;
  objArr: any[] = [
    {
      name: 'Ramesh',
      Age: 28,
    },
    {
      name: 'Ramesh',
      Age: 28,
    },
    {
      name: 'Ramesh',
      Age: 28,
    },
    {
      name: 'Ramesh',
      Age: 28,
    },
  ];
  public numAndLatters = '0123456789ABCDEF';
  public randomColor: string = '#';
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
  ngOnInit(): void {
    this.getRandomColor();
  }
  getRandomColor() {
    for (var i = 0; i < 6; i++) {
      this.randomColor += this.numAndLatters[Math.floor(Math.random() * 16)];
    }
  }
}
