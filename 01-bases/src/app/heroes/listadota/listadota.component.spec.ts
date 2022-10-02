import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadotaComponent } from './listadota.component';

describe('ListadotaComponent', () => {
  let component: ListadotaComponent;
  let fixture: ComponentFixture<ListadotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
