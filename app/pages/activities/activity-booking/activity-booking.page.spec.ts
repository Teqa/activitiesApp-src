import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivityBookingPage } from './activity-booking.page';

describe('ActivityBookingPage', () => {
  let component: ActivityBookingPage;
  let fixture: ComponentFixture<ActivityBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
