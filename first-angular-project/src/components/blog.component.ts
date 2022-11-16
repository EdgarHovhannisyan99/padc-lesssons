import {Component} from "@angular/core";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {
  private generateColor = function (): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  data: any[] = [
    {
      id: 1,
      title: 'Babken',
      color: {'background-color': this.generateColor()},
      description: 'Description 1',

    },
    {
      id: 2,
      title: 'Vazgen',
      description: 'Description 2',
      color: {'background-color': this.generateColor()},

    },
    {
      id: 3,
      title: 'Karen',
      color: {'background-color': this.generateColor()},
      description: 'Description 3',

    },
    {
      id: 4,
      title: 'Zaven',
      color: {'background-color': this.generateColor()},
      description: 'Description 5',
    }
  ]


  public onClose = (id: number): void => {
    const index = this.data.findIndex(i => i.id === id)
    this.data.splice(index, 1)
  }

  public onChangeColor = (id: number): void => {
    const index = this.data.findIndex(i => i.id === id)
    const color = this.generateColor()
    console.log(this.data[index].color['background-color'])
    this.data[index].color['background-color'] = color
  }
}
