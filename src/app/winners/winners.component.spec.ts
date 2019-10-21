import { AgePipe } from './../shared/age.pipe';
import { FOneService } from './../shared/services/f-one.service';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { WinnersComponent } from './winners.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { data } from "../../mocks/winners.data";
import { CommonModule } from '@angular/common';

describe('WinnersComponent', () => {
	let component: WinnersComponent;
	let fixture: ComponentFixture<WinnersComponent>;
	let router: Router;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WinnersComponent, AgePipe],
			providers: [
				{
					provide: Router,
					useValue: {
						navigate: () => undefined
					}
				},
				FOneService,
				{
					provide: HttpClient,
					useValue: {
						get: () => of(data)
					}
				},
			],
			schemas: [NO_ERRORS_SCHEMA]
		})
			.compileComponents();
	}));

	describe("given component", () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(WinnersComponent);
			router = TestBed.get(Router);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should render component', () => {
			expect(fixture.nativeElement.className.includes("winners-component")).toBeTruthy();
		});

		it("should render winners", () => {
			expect(fixture.nativeElement.querySelectorAll(".winner").length).toBeGreaterThan(0);
		});

		describe("when a winner is clicked", () => {
			beforeEach(() => {
				spyOn(router, "navigate");
				fixture.nativeElement.querySelector(".winner").click();
			});

			it("should call router navigate method", () => {
				expect(router.navigate).toHaveBeenCalled();
			});
		});
	});
});
