import { Injectable } from '@angular/core';

@Injectable({
	providedIn: "root"
})
export class ConfigService {
	api_root = "https://ergast.com/api/f1";

	getWinnersUrl(limit = 100, offset = 0) {
		return `${this.api_root}/driverStandings/1.json?limit=${limit}&offset=${offset}`;
	}

	getRaceResultsBySeason(season: string) {
		return `${this.api_root}/${season}/results/1.json`;
	}

	getSeasonUrl(season: string) {
		return `${this.api_root}/${season}.json`;
	}
}