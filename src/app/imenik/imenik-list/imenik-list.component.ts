import { Component, OnInit } from '@angular/core';
import { ImenikService } from '../imenik.service';
import { Imenik } from '../imenik.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imenik-list',
  templateUrl: './imenik-list.component.html',
  styleUrls: ['./imenik-list.component.css'],
})
export class ImenikListComponent implements OnInit {
  imenikList: Imenik[] = [];
  searchTerm: string;
  isAdmin = false;
  isLoading = false;

  constructor(
    private imenikService: ImenikService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadImenik();
  }

  loadImenik(): void {
    this.isLoading = true;
    this.imenikService.getImeniks().subscribe((res) => {
      this.imenikList = res;
      this.isLoading = false;
    });
  }

  onEdit(imenik: Imenik): void {
    if (!imenik) {
      this.router.navigate(['new'], {
        relativeTo: this.route,
      });
    } else {
      this.router.navigate(['edit', imenik.imenikId], {
        relativeTo: this.route,
      });
    }
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
    // this.loadImenik();
  }

  clearSearch(): any {
    this.searchTerm = '';
  }
}
