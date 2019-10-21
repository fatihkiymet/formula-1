import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';

import { StandingsRow, WinnerResponseModel } from '../model/winners.model';
import { SeasonResponseModel } from '../model/season.model';

import { ConfigService } from './config-service';
import { Race, Driver } from '../model/core.model';
import { RaceResultsResponseModel } from '../model/race-results.model';

@Injectable({
	providedIn: "root"
})
export class FOneService {

	winners: {
		[key: string]: Driver
	} | undefined;

	constructor(
		private http: HttpClient,
		private configService: ConfigService
	) { }

	getWinners(): Observable<StandingsRow[]> {
		return this.http.get<WinnerResponseModel>(this.configService.getWinnersUrl(10, 55)).pipe(
			filter(data => !!data.MRData && !!data.MRData.StandingsTable && !!data.MRData.StandingsTable.StandingsLists),
			map(data => data.MRData.StandingsTable.StandingsLists),
			tap(standingsLists => {
				this.winners = {};
				standingsLists.forEach(row => {
					this.winners[row.season] = row.DriverStandings[0].Driver;
				});
			}),
			catchError(err => {
				console.log(err);

				return EMPTY;
			})
		);
	}

	getSeason(season: string): Observable<Race[]> {
		return this.http.get<SeasonResponseModel>(this.configService.getSeasonUrl(season)).pipe(
			filter(data => !!data.MRData && !!data.MRData.RaceTable && !!data.MRData.RaceTable.Races),
			map(data => data.MRData.RaceTable.Races),
			catchError(err => {
				console.log(err);

				return EMPTY;
			})
		);
	}

	getRaceResultsBySeason(season: string): Observable<Race[]> {
		return this.http.get<RaceResultsResponseModel>(this.configService.getRaceResultsBySeason(season)).pipe(
			filter(data => !!data.MRData && !!data.MRData.RaceTable && !!data.MRData.RaceTable.Races),
			map(data => data.MRData.RaceTable.Races),
			catchError(err => {
				console.log(err);

				return EMPTY;
			})
		);
	}

}