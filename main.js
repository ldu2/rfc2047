var rfc2047 = require('rfc2047');

window.rfc2047Encoder = (str) => {
	return rfc2047.encode(str);
}

window.rfc2047Decoder = (str) => {
	return rfc2047.decode(str)
}
