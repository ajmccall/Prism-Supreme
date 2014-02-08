/*
 *  Original by Angelo Villegas: http://studiovillegas.com
 *
 *  Adds the following token:
 *    comment, keyword, builtin, operator, string, preprocessor, number, regex, variable
 */
Prism.languages.objc = Prism.languages.extend('c', {
	'comment': /(\/\*[\w\W]*?\*\/)|(\/\/(.*))/g,
	'keyword': /\b(alloc|init)|\b[A-Z][a-zA-Z_0-9]*[?!]?\b|[a-zA-Z]*?(:|:\b)|\b\.[A-Za-z]*\b/g,
	'builtin': /\b(id|typedef|self|void|return|nil|switch|super|strong|retain|nonatomic|assign|static|copy|SEL|YES|BOOL)\b/g,
	'operator': {
		pattern: /([^\.]|^)([-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|%|\^|(&lt;){2}|($gt;){2,3}|:|~)/g,
		lookbehind: true
	},
	'string': /@?("|')(\\?.)*?\1/g,
	'preprocessor': /^#(.*)/g,
	'number': /(0x)[A-Fa-f\d]*|@\d*|\b\d+\b/g
});

Prism.languages.insertBefore('objc', 'keyword', {
	'regex': {
		pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
		lookbehind: true
	},
	//property class reused for macro statements
	'variable': /[@$&]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
});
