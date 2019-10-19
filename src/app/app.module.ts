import { AgePipe } from './shared/age.pipe';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { WinnersComponent } from './winners/winners.component';
import { SeasonComponent } from './season/season.component';
import { DriverCardComponent } from './driver/driver-card/driver-card.component';

@NgModule({
	declarations: [
		AppComponent,
		DriverCardComponent,
		SeasonComponent,
		WinnersComponent,
		AgePipe
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		CommonModule,
		HttpClientModule
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
