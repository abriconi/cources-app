function number2digits(number: number): string {
	return String(number).padStart(2, '0');
}

export function dateGenerator(dateInStringFormat: string): string {
	const [day, month, year] = dateInStringFormat.split('/');
	const date: Date = new Date(Number(year), Number(month), Number(day));
	const dayFormatted: string = number2digits(date.getDate());
	const monthFormatted: string = number2digits(date.getMonth());
	const dateFormatted = `${dayFormatted}.${monthFormatted}.${year}`;
	return dateFormatted;
}
