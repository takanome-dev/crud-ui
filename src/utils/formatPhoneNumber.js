export default function formatPhoneNumber(phoneNumber) {
	const cleaned = ("" + phoneNumber).replace(/\D/g, "");
	// const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
	const match = cleaned.match(
		/^(\d{2})[-. ]?(\d{3})[-. ]?(\d{2})[-. ]?(\d{2})$/
	);
	if (match) {
		return `+221 ${match[1]} ${match[2]} ${match[3]}`;
		// return '(' + match[1] + ') ' + match[2] + '-' + match[3];
	}
	return null;
}
