import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Imenik } from '../imenik.model';
import { ImenikService } from '../imenik.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-imenik-edit',
  templateUrl: './imenik-edit.component.html',
  styleUrls: ['./imenik-edit.component.css'],
})
export class ImenikEditComponent implements OnInit {
  id: number;
  imenikItem: Imenik;
  editMode: true;

  constructor(
    private route: ActivatedRoute,
    private imenikService: ImenikService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getImenik();
  }

  onSubmit(f: NgForm): void {
    this.imenikService
      .updateImenik(f.value, this.imenikItem.imenikId)
      .subscribe();
    // console.log(f.value);
    // this.getImenik();
    this.onGoBack();
  }

  getImenik(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.imenikService.getImenikById(this.id).subscribe((result) => {
        this.imenikItem = result;
        // console.log(this.imenikItem);
      });
    });
  }

  onGoBack(): void {
    this.router.navigate(['/']);
  }
}
