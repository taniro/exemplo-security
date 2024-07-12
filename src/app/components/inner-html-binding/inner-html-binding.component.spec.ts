import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerHtmlBindingComponent } from './inner-html-binding.component';

describe('InnerHtmlBindingComponent', () => {
  let component: InnerHtmlBindingComponent;
  let fixture: ComponentFixture<InnerHtmlBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerHtmlBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerHtmlBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
