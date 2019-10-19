import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	HostBinding,
	ViewEncapsulation
} from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	title = "formula app";

	constructor(
		private changeDetector: ChangeDetectorRef
	) { }

	ngOnInit() {

	}

	ngOnDestroy() {
	}
}