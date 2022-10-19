import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-social-worker',
  templateUrl: './social-worker.component.html',
  styleUrls: ['./social-worker.component.scss']
})
export class SocialWorkerComponent implements OnInit {

  constructor(public translate: TranslateService) { 
    translate.addLangs(['en', 'nl', 'in']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

}
