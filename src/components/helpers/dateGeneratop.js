export function dateGenerator(dateInStringFormat) {
	const [day, month, year] = dateInStringFormat.split('/');
	const date = new Date(year, month, day);
	const dayFormatted = number2digits(date.getDate());
	const monthFormatted = number2digits(date.getMonth());
	const dateFormatted = `${dayFormatted}.${monthFormatted}.${year}`;
	return dateFormatted;
}

function number2digits(number) {
	return String(number).padStart(2, '0');
}
