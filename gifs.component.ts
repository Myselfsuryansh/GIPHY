import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css'],
})
export class GifsComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription = Subscription

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getTrendingGifs();
    this.service.getGifs()
      .subscribe((response:any)=>{
        this.gifs=response

      })
  }
  ngOnDestroy(): void {
      
  }
}
