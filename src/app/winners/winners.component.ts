import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	HostBinding,
	OnInit,
	ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { StandingsRow } from '../shared/model/winners.model';
import { FOneService } from '../shared/services/f-one.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-winners',
	templateUrl: './winners.component.html',
	styleUrls: ['./winners.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	preserveWhitespaces: false
})
export class WinnersComponent implements OnInit {

	@HostBinding("class.winners-component") hostCssClass = true;

	winners: StandingsRow[] | undefined;

	private data$$: Subscription | undefined;

	constructor(
		private router: Router,
		private changeDetector: ChangeDetectorRef,
		private service: FOneService
	) { }

	ngOnInit() {
		this.data$$ = this.service.getWinners().pipe(
			tap(winners => this.winners = winners)
		)
			.subscribe(() => this.changeDetector.markForCheck());
	}

	ngOnDestroy(): void {
		if (this.data$$) {
			this.data$$.unsubscribe();
		}
	}

	trackByStandingRow(index: number, row: StandingsRow) {
		return row.season;
	}

	showSeasonDetail(season: string) {
		this.router.navigate([`/seasons/${season}`]);
	}

}
