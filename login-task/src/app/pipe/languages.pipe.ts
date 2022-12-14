import {Pipe, PipeTransform, Injectable} from '@angular/core'
import {ARM} from '../languages/arm.language'
import {ENG} from '../languages/eng.language'

@Pipe({
  name: 'languages',
  pure: false
})

export class LanguagesPipe implements PipeTransform {
  language: typeof ENG | typeof ARM = ENG

  constructor() {

  }

  transform(value: string): string {
    const keys = value.split('.')
    // @ts-ignore
    return this.language[keys[0]][keys[1]]
  }

  public changeLanguage(lang: string): void {
    if(lang === 'ARM'){
      this.language = ARM
    }else {
      this.language = ENG
    }
    console.log(this.language)
  }


  public getLanguauge(): string {
    if (this.language === ENG) {
      return 'ENG'
    } else {
      return 'ARM'
    }
  }

}
