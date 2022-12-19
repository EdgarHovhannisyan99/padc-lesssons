import { ARM } from "../languages/arm.language"
import { ENG } from "../languages/eng.language"

export class LanguageServices {
  private _language: typeof ENG | typeof ARM = ENG
  constructor() {
  }

   getActiveLang(): typeof ENG | typeof ARM {
    return this._language
  }

  public changeLanguage(lang: string): void {
    if(lang === 'ARM'){
      this._language = ARM
    }else {
      this._language = ENG
    }
  }
}
