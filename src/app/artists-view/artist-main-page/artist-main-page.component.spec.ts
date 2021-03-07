import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMainPageComponent } from './artist-main-page.component';

describe('ArtistMainPageComponent', () => {
  let component: ArtistMainPageComponent;
  let fixture: ComponentFixture<ArtistMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
