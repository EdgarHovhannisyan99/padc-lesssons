import { Component } from '@angular/core';
import { LanguagesPipe } from 'src/app/pipe/languages.pipe';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent {

  constructor(private languagesPipe: LanguagesPipe) {
  }

  changeLanguage(lang: string):void {
    return this.languagesPipe.changeLanguage(lang)
  }

  getActiveLanguage():string {
    return this.languagesPipe.getLanguauge()
  }
}
