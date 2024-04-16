import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesHumainesComponent } from './ressources-humaines.component';

describe('RessourcesHumainesComponent', () => {
  let component: RessourcesHumainesComponent;
  let fixture: ComponentFixture<RessourcesHumainesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourcesHumainesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RessourcesHumainesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
