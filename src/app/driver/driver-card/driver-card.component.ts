import { Component, Input, HostBinding, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-driver-card',
	templateUrl: './driver-card.component.html',
	styleUrls: ['./driver-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class DriverCardComponent {

	@HostBinding("class.driver-card-component") hostCssClass = true;

	@Input() firstName: string | undefined;
	@Input() lastName: string | undefined;
	@Input() age: string | undefined;
	@Input() nationality: string | undefined;
	@Input() team: string | undefined;
}
