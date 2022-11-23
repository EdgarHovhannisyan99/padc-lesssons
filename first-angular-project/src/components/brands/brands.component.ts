import {Component, Input} from '@angular/core'
import { IBrand } from 'src/models'

@Component({
    selector: 'app-brand',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.css']
})

export class BrandsComponent {
 @Input() brand: IBrand
}