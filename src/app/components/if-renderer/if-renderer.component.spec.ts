import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfRendererComponent } from './if-renderer.component';

describe('IfRendererComponent', () => {
  let component: IfRendererComponent;
  let fixture: ComponentFixture<IfRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
