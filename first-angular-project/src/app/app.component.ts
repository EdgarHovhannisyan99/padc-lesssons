import {Component, OnInit} from '@angular/core';

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
            price: 4566
        },
        {
            id: 2,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/4/3/4360195.jpg',
            category: 'Մկնիկներ',
            name: 'Canyon CND-SGM6N Black Mouse ',
            price: 7487
        },
        {
            id: 3,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/4/3/432220.jpg',
            category: 'Մկնիկներ',
            name: 'Canyon CND-SGM6N Black Mouse ',
            price: 7487
        },
        {
            id: 4,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/8/7/877300.jpg',
            category: 'Մկնիկներ',
            name: 'Canyon CND-SGM6N Black Mouse ',
            price: 7487
        },

    ]

    ngOnInit() {

    }

}
