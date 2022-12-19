import {Pipe, PipeTransform, Injectable} from '@angular/core'
import {ARM} from '../languages/arm.language'
import {ENG} from '../languages/eng.language'
import { LanguageServices } from '../services/language.services'

@Pipe({
  name: 'languages',
  pure: false
})

export class LanguagesPipe implements PipeTransform {
  language!: typeof ENG | typeof ARM

  constructor(private _languageService: LanguageServices) {
      this.language = this._languageService.getActiveLang()
  }

  transform(value: string): string {
    const keys = value.split('.')
    // @ts-ignore
    return this.language[keys[0]][keys[1]]
  }

}
