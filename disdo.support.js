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
			"protype": "protype"
		}
	@end-include
*/

var falzy = require("falzy");
var protype = require("protype");

var CLEAN_PATTERN = /[^a-zA-Z0-9]+/g;
var UPPERCASE_PATTERN = /[A-Z]+/g;
var SPACE_PATTERN = /\s+/g;
var DROP_PATTERN = /^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g;

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

	return text.replace(CLEAN_PATTERN, " ").replace(UPPERCASE_PATTERN, function (match) {
		return match.replace(match, " " + match);
	}).replace(SPACE_PATTERN, " ").replace(DROP_PATTERN, "");
};

module.exports = disdo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2RvLmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsInByb3R5cGUiLCJDTEVBTl9QQVRURVJOIiwiVVBQRVJDQVNFX1BBVFRFUk4iLCJTUEFDRV9QQVRURVJOIiwiRFJPUF9QQVRURVJOIiwiZGlzZG8iLCJ0ZXh0IiwiU1RSSU5HIiwicmVwbGFjZSIsIm1hdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1FLGdCQUFnQixnQkFBdEI7QUFDQSxJQUFNQyxvQkFBb0IsU0FBMUI7QUFDQSxJQUFNQyxnQkFBZ0IsTUFBdEI7QUFDQSxJQUFNQyxlQUFlLGdDQUFyQjs7QUFFQSxJQUFNQyxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLElBQWhCLEVBQXNCO0FBQ25DOzs7Ozs7OztBQVFBLEtBQUlSLE1BQU9RLElBQVAsS0FBaUIsQ0FBQ04sUUFBU00sSUFBVCxFQUFlQyxNQUFmLENBQXRCLEVBQStDO0FBQzlDLFNBQU9ELElBQVA7QUFDQTs7QUFFRCxRQUFPQSxLQUNMRSxPQURLLENBQ0lQLGFBREosRUFDbUIsR0FEbkIsRUFFTE8sT0FGSyxDQUVJTixpQkFGSixFQUV1QixVQUFFTyxLQUFGLEVBQWE7QUFBRSxTQUFPQSxNQUFNRCxPQUFOLENBQWVDLEtBQWYsUUFBMkJBLEtBQTNCLENBQVA7QUFBK0MsRUFGckYsRUFHTEQsT0FISyxDQUdJTCxhQUhKLEVBR21CLEdBSG5CLEVBSUxLLE9BSkssQ0FJSUosWUFKSixFQUlrQixFQUpsQixDQUFQO0FBS0EsQ0FsQkQ7O0FBb0JBTSxPQUFPQyxPQUFQLEdBQWlCTixLQUFqQiIsImZpbGUiOiJkaXNkby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNiBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGlzZG9cIixcblx0XHRcdFwicGF0aFwiOiBcImRpc2RvL2Rpc2RvLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJkaXNkby5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJkaXNkb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Rpc2RvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZGlzZG8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRBbGwgc3BlY2lhbCBjaGFyYWN0ZXJzIG9uIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG5vbi1hbHBoYW51bWVyaWMgd29yZCB3aWxsIGJlIGRpc2NhcmRlZC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcblxuY29uc3QgQ0xFQU5fUEFUVEVSTiA9IC9bXmEtekEtWjAtOV0rL2c7XG5jb25zdCBVUFBFUkNBU0VfUEFUVEVSTiA9IC9bQS1aXSsvZztcbmNvbnN0IFNQQUNFX1BBVFRFUk4gPSAvXFxzKy9nO1xuY29uc3QgRFJPUF9QQVRURVJOID0gL15bXmEtekEtWjAtOV0rfFteYS16QS1aMC05XSskL2c7XG5cbmNvbnN0IGRpc2RvID0gZnVuY3Rpb24gZGlzZG8oIHRleHQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJ0ZXh0OnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggdGV4dCApIHx8ICFwcm90eXBlKCB0ZXh0LCBTVFJJTkcgKSApe1xuXHRcdHJldHVybiB0ZXh0O1xuXHR9XG5cblx0cmV0dXJuIHRleHRcblx0XHQucmVwbGFjZSggQ0xFQU5fUEFUVEVSTiwgXCIgXCIgKVxuXHRcdC5yZXBsYWNlKCBVUFBFUkNBU0VfUEFUVEVSTiwgKCBtYXRjaCApID0+IHsgcmV0dXJuIG1hdGNoLnJlcGxhY2UoIG1hdGNoLCBgICR7IG1hdGNoIH1gICk7IH0gKVxuXHRcdC5yZXBsYWNlKCBTUEFDRV9QQVRURVJOLCBcIiBcIiApXG5cdFx0LnJlcGxhY2UoIERST1BfUEFUVEVSTiwgXCJcIiApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkaXNkbztcbiJdfQ==
