import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Hugh';

  constructor(translate: TranslateService) {
    let currentLang = translate.getBrowserLang();

    if (currentLang.includes('en')) {
      currentLang = 'en-US';
    } else {
      currentLang = 'pt-BR';
    }

    translate.setDefaultLang(currentLang);
    localStorage.setItem('currentLang', currentLang);
  }
}
