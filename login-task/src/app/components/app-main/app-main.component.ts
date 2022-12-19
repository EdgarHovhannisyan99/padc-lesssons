import {Component} from '@angular/core';
import {LanguagesPipe} from 'src/app/pipe/languages.pipe';
import {LanguageServices} from 'src/app/services/language.services';
import {ENG} from '../../languages/eng.language'
import {ARM} from '../../languages/arm.language'
@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent {

  constructor(private languageService: LanguageServices) {
  }

  changeLanguage(lang: string): void {
    return this.languageService.changeLanguage(lang)
  }

  getActiveLanguage(): typeof ENG | typeof ARM {
    return this.languageService.getActiveLang()
  }
}
