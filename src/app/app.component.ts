import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'niku-build-ui';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'nl', 'in']);
    translate.setDefaultLang('en');
  }
}
