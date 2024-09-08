import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenRemoveBackgroundComponent } from './imagen-remove-background.component';

describe('ImagenRemoveBackgroundComponent', () => {
  let component: ImagenRemoveBackgroundComponent;
  let fixture: ComponentFixture<ImagenRemoveBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenRemoveBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenRemoveBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
