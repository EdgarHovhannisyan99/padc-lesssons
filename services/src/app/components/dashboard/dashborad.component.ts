import { Component, OnInit } from '@angular/core';
import { ILinks } from 'src/app/models/models';
import { LinksServices } from 'src/app/services/linksServices';
import { TopBarService } from 'src/app/services/topBarService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit{
  links!: ILinks[]

  constructor(public serviceLinks: LinksServices) {}

  ngOnInit():void {
    this.links = this.serviceLinks.getLinks()
  }

  getLinks(): ILinks[]{
    return this.serviceLinks.getLinks()
  }

}
