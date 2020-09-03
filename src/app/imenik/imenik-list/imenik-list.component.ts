import { Component, OnInit } from '@angular/core';
import { ImenikService } from '../imenik.service';
import { Imenik } from './imenik.model';

@Component({
  selector: 'app-imenik-list',
  templateUrl: './imenik-list.component.html',
  styleUrls: ['./imenik-list.component.css'],
})
export class ImenikListComponent implements OnInit {
  imenikList: Imenik[] = [];
  searchTerm: string;

  constructor(private imenikService: ImenikService) {}

  ngOnInit(): void {
    this.loadImenik();
  }

  loadImenik(): any {
    this.imenikService.getImenik().subscribe((data) => {
      this.imenikList = data;
      console.log(this.imenikList);
    });
  }

  clearSearch(event: any): any {
    if (event.key === 'Escape') {
      this.searchTerm = '';
    }
  }
}
