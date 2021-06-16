import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaComponent } from './tea.component';

describe('TeaComponent', () => {
  let component: TeaComponent;
  let fixture: ComponentFixture<TeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports:[HttpClientTestingModule],
      declarations: [ TeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
