import {Component} from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  public cardData: Array<any> = [
    {
      id: 1,
      img_src: 'https://www.britvology.ru/upload/resize_cache/webp/iblock/2f4/600_600_140cd750bba9870f18aada2478b24840a/ndsaqy7rhey0k8st7ivxe82u165bqqg9.webp',
      description: 'Т-образная бритва MUEHLE TRADITIONAL, черный хром, сlosed comb',
      price: 5400
    },
    {
      id: 2,
      img_src: 'https://www.britvology.ru/upload/resize_cache/webp/iblock/bc1/600_600_140cd750bba9870f18aada2478b24840a/ouhgly3gwiwe7jxubdn1ul5e3ydwsi1d.webp',
      description: 'Твердое мыло для бритья MUEHLE в деревянной чаше, Алоэ Вера, 65 гр',
      price: 3920
    },
    {
      id: 3,
      img_src: 'https://www.britvology.ru/upload/resize_cache/webp/iblock/b27/hiajkla8hkm07k4bvhyb3hbrrij2ncw9.webp',
      description: 'Т-образная бритва MUEHLE TRADITIONAL, черный хром, сlosed comb',
      price: 5400
    },
    {
      id: 4,
      img_src: 'https://www.britvology.ru/upload/resize_cache/webp/iblock/b4f/xfgs8ym6v37hghsslg3qvo5axnyzckv0.webp',
      description: 'Бритва MUEHLE SOPHIST, Fusion, железное дерево',
      price: 19980
    }
  ]

}
