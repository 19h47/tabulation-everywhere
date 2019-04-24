/**
 * Get hash
 *
 * @param  str href Given href.
 * @return str
 * @see https://github.com/ReactTraining/history/blob/master/modules/createHashHistory.js#L38
 */
export default function (href) {
	const hashIndex = href.indexOf('#');

	return -1 === hashIndex ? '' : href.substring(hashIndex + 1);
}
