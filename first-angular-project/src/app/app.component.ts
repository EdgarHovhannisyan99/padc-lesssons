import {Component, OnInit, Input} from '@angular/core';
import {brands, cardData, newProduct } from 'src/data/defaultData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-angular-project';
  public cardData: Array<any> = cardData
  public newProduct: Array<any> = newProduct
  public brands: Array<any> = brands

  public onLike = (id: number): void => {
    let index = this.cardData.findIndex(i => i.id === id)
    if(index >= 0) {
       index = this.cardData.findIndex(i => i.id === id)
      const like = this.cardData[index].liked
      this.cardData[index].liked = !like
    }else {
      index = this.newProduct.findIndex(i => i.id === id)
      const like = this.newProduct[index].liked
      this.newProduct[index].liked = !like
    }

  }

  ngOnInit() {

  }

}
