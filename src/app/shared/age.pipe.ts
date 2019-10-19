import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'age' })
export class AgePipe implements PipeTransform {
	constructor(
	) { }

	transform(date: string | Date, year: string): string {
		let d: Date;
		let from: Date;

		d = typeof (date) === "string" ? new Date(date) : date;
		from = year ? new Date(year) : new Date();

		return (from.getFullYear() - d.getFullYear()).toString();
	}
}