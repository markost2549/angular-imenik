import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImenikListComponent } from './imenik-list.component';

describe('ImenikListComponent', () => {
  let component: ImenikListComponent;
  let fixture: ComponentFixture<ImenikListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImenikListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImenikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
