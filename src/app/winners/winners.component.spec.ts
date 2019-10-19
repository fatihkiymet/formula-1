import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { WinnersComponent } from './winners.component';

describe('WinnersComponent', () => {
	let component: WinnersComponent;
	let fixture: ComponentFixture<WinnersComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WinnersComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WinnersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
