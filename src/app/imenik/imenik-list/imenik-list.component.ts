import { Component, OnInit } from '@angular/core';
import { ImenikService } from '../imenik.service';
import { Imenik } from '../imenik.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imenik-list',
  templateUrl: './imenik-list.component.html',
  styleUrls: ['./imenik-list.component.css'],
})
export class ImenikListComponent implements OnInit {
  imenikList: Imenik[] = [];
  searchTerm: string;
  isAdmin = true;
  subscription: Subscription;

  constructor(
    private imenikService: ImenikService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadImenik();
  }

  loadImenik(): void {
    this.imenikService.getImeniks().subscribe((res) => {
      this.imenikList = res;
    });
  }

  onEdit(imenik: Imenik) {
    this.router.navigate(['edit', imenik.imenikId], { relativeTo: this.route });
  }

  deleteImenik(imenik: Imenik): void {
    if (confirm('Are you sure to delete ')) {
      this.imenikService.deleteImenik(imenik.imenikId).subscribe((res) => {
        this.loadImenik();
      });
      console.log('Imenik deleted');
    }
  }

  isAdminUser(): void {
    this.isAdmin = !this.isAdmin;
    this.ngOnInit();
  }

  clearSearch(): any {
    this.searchTerm = '';
  }
}
