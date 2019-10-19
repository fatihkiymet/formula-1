import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { SeasonComponent } from './season/season.component';
import { WinnersComponent } from './winners/winners.component';

const appRoutes: Routes = [
	{
		path: '',
		component: WinnersComponent
	},
	{
		path: 'seasons',
		component: WinnersComponent
	},
	{
		path: 'seasons/:season',
		component: SeasonComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }