import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { data } from "../../mocks/season-results.data";

import { AgePipe } from '../shared/age.pipe';
import { FOneService } from '../shared/services/f-one.service';

import { SeasonComponent } from './season.component';

const DRIVER = {
	driverId: 'alonso',
	permanentNumber: '14',
	code: 'ALO',
	url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
	givenName: 'Fernando',
	familyName: 'Alonso',
	dateOfBirth: '1981-07-29',
	nationality: 'Spanish'
};

describe('SeasonComponent', () => {
	let component: SeasonComponent;
	let fixture: ComponentFixture<SeasonComponent>;
	let service: FOneService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				SeasonComponent,
				AgePipe
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						snapshot: {
							params: {
								season: "2005"
							}
						}
					}
				},
				{
					provide: HttpClient,
					useValue: {
						get: () => of(data)
					}
				},
				FOneService,
			],
			schemas: [NO_ERRORS_SCHEMA]
		})
			.compileComponents();
	}));

	describe("given component", () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(SeasonComponent);
			component = fixture.componentInstance;
			service = TestBed.get(FOneService);
			service.winners = {
				"2005": DRIVER
			};

			fixture.detectChanges();
		});

		it('should render component', () => {
			expect(fixture.nativeElement.className.includes("season-component")).toBeTruthy();
		});

		it("should render results", () => {
			expect(fixture.nativeElement.querySelectorAll(".season-component-race").length).toBeGreaterThan(0);
		});

		it("should highlighted season winner", () => {
			expect(fixture.nativeElement.querySelectorAll(".highlighted").length).toBe(7);
		});
	});
});
