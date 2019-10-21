import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, ChangeDetectorRef, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FOneService } from '../shared/services/f-one.service';
import { tap, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Race, Driver } from '../shared/model/core.model';

@Component({
	selector: 'app-season',
	templateUrl: './season.component.html',
	styleUrls: ['./season.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class SeasonComponent implements OnInit {

	@HostBinding("class.season-component") hostCssBinding = true;

	season: string | undefined;
	races: Race[] | undefined;

	private data$$: Subscription;

	constructor(
		private service: FOneService,
		private route: ActivatedRoute,
		private changeDetector: ChangeDetectorRef
	) { }

	ngOnInit() {
		const { season } = this.route.snapshot.params;
		this.season = season;
		if (!season) {
			return;
		}

		this.data$$ = this.service.getRaceResultsBySeason(season).pipe(
			filter(races => !!races),
			tap(races => this.races = races)
		).subscribe(() => this.changeDetector.markForCheck());
	}

	ngOnDestroy(): void {
		if (this.data$$) {
			this.data$$.unsubscribe();
		}
	}

	trackByRace(index: number, race: Race) {
		return race.round;
	}

	isWinner(driver: Driver) {
		return this.season && this.service.winners && this.service.winners[this.season] &&
			this.service.winners[this.season].driverId === driver.driverId;
	}

}
