import { ApiResponseModel, Race } from "./core.model";

export interface RaceResultsResponseModel extends ApiResponseModel<RaceResultsData> {

}

export interface RaceResultsData {
	RaceTable: RaceTable;
}

export interface RaceTable {
	season: string;
	Races: Race[];
}