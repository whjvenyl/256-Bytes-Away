/**
 * Generates a cryptographically strong string using window.crypto
 * @param {number} length - How long will the returned string be
 * @param {string} alphabet - which characters will be used in order to construct the string
 * @returns {string}
 */
function CRID(length = 32, alphabet = "abcdefghijklmnopqrstuvwxyz0123456789_") {
	let arr = new Uint8Array(length);
	window.crypto.getRandomValues(arr);

	arr = arr.map(x => alphabet.charCodeAt(x % alphabet.length));
	return String.fromCharCode.apply(null, arr);
}



// Example usage
CRID();
// returns: s6axoowic5adumxn9wvv9oa_2guzzdu1

CRID(8);
// returns: aqlqnqzh

CRID(16, "češtinajekrásnýjazykatopředevšímvroce2019");
// returns: taamn2iáázzverae