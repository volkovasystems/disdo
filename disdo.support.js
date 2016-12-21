"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "disdo",
			"path": "disdo/disdo.js",
			"file": "disdo.js",
			"module": "disdo",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/disdo.git",
			"test": "disdo-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		All special characters on the beginning of the non-alphanumeric word will be discarded.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"harden": "harden",
			"protype": "protype"
		}
	@end-include
*/

var falzy = require("falzy");
var harden = require("harden");
var protype = require("protype");

var disdo = function disdo(text) {
	/*;
 	@meta-configuration:
 		{
 			"text:required": "string"
 		}
 	@end-meta-configuration
 */

	if (falzy(text) || !protype(text, STRING)) {
		return text;
	}

	return text.replace(disdo.CLEAN_PATTERN, " ").replace(disdo.UPPERCASE_PATTERN, function onReplace(match) {
		return match.replace(match, " " + match);
	}).replace(disdo.SPACE_PATTERN, " ").replace(disdo.DROP_PATTERN, "");
};

harden.bind(disdo)("CLEAN_PATTERN", /[^a-zA-Z0-9]+/g).harden("UPPERCASE_PATTERN", /[A-Z]+/g).harden("SPACE_PATTERN", /\s+/g).harden("DROP_PATTERN", /^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g);

module.exports = disdo;