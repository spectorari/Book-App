import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChapteroneComponent } from './chapterone.component';

describe('ChapteroneComponent', () => {
  let component: ChapteroneComponent;
  let fixture: ComponentFixture<ChapteroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapteroneComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChapteroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
