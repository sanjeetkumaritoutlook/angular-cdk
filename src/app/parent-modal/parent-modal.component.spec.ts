import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentModalComponent } from './parent-modal.component';

describe('ParentModalComponent', () => {
  let component: ParentModalComponent;
  let fixture: ComponentFixture<ParentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
