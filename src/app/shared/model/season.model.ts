import { ApiResponseModel, Race } from "./core.model";

export interface SeasonResponseModel extends ApiResponseModel<SeasonData> {

}

export interface SeasonData {
	RaceTable: RaceTable;
}

export interface RaceTable {
	season: string;
	Races: Race[];
}