import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-angular-project';
  public cardData: Array<any> = [
    {
      id: 1,
      img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/4/3/4319371.jpg',
      category: 'Մկնիկներ',
      name: 'Hama Milano Wireless Mouse, Red (182640) ',
      liked: false,
      price: 4566
    },
    {
      id: 2,
      img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/4/3/4360195.jpg',
      category: 'Մկնիկներ',
      name: 'Canyon CND-SGM6N Black Mouse ',
      liked: false,
      price: 7487
    },
    {
      id: 3,
      img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/4/3/432220.jpg',
      category: 'Մկնիկներ',
      name: 'Canyon CND-SGM6N Black Mouse ',
      liked: false,
      price: 7487
    },
    {
      id: 4,
      img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/8/7/877300.jpg',
      category: 'Մկնիկներ',
      name: 'Canyon CND-SGM6N Black Mouse ',
      liked: true,
      price: 7487
    },
  ]

  public onLike = (id: number): void => {
    const index = this.cardData.findIndex(i => i.id === id)
    const like = this.cardData[index].liked
    this.cardData[index].liked = !like


  }

  ngOnInit() {

  }

}
