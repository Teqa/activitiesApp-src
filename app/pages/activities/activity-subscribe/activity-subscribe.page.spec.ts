import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivitySubscribePage } from './activity-subscribe.page';

describe('ActivitySubscribePage', () => {
  let component: ActivitySubscribePage;
  let fixture: ComponentFixture<ActivitySubscribePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitySubscribePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitySubscribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
