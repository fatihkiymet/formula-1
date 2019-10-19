import { ApiResponseModel, Driver, Constructor } from './core.model';

export interface WinnerResponseModel extends ApiResponseModel<WinnerData> {

}

export interface WinnerData {
	StandingsTable: {
		driverStandings: string;
		StandingsLists: StandingsRow[];
	};
}

export interface StandingsRow {
	season: string;
	round: string;
	DriverStandings: DriverStandingsRow[];
}

export interface DriverStandingsRow {
	position: string;
	positionText: string;
	points: string;
	wins: string;
	Driver: Driver;
	Constructors: Constructor[];
}