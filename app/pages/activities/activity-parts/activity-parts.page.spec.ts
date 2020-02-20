import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivityPartsPage } from './activity-parts.page';

describe('ActivityPartsPage', () => {
  let component: ActivityPartsPage;
  let fixture: ComponentFixture<ActivityPartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPartsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityPartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
