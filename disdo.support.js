"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/disdo.git",
              			"test": "disdo-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Transform any human readable alphanumeric string divided by certain characters
              			into space separated form. Latin word for spread.
              
              		All special characters on the beginning of the non-alphanumeric word will be discarded.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              		}
              	@end-include
              */

var falzy = require("falzy");

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

	if (falzy(text) || typeof text != "string") {
		return text;
	}

	return text.replace(CLEAN_PATTERN, " ").
	replace(UPPERCASE_PATTERN, function (match) {return match.replace(match, " " + match);}).
	replace(SPACE_PATTERN, " ").
	replace(DROP_PATTERN, "");
};

module.exports = disdo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2RvLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwiQ0xFQU5fUEFUVEVSTiIsIlVQUEVSQ0FTRV9QQVRURVJOIiwiU1BBQ0VfUEFUVEVSTiIsIkRST1BfUEFUVEVSTiIsImRpc2RvIiwidGV4dCIsInJlcGxhY2UiLCJtYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNQyxnQkFBZ0IsZ0JBQXRCO0FBQ0EsSUFBTUMsb0JBQW9CLFNBQTFCO0FBQ0EsSUFBTUMsZ0JBQWdCLE1BQXRCO0FBQ0EsSUFBTUMsZUFBZSxnQ0FBckI7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxJQUFoQixFQUFzQjtBQUNuQzs7Ozs7Ozs7QUFRQSxLQUFJUCxNQUFPTyxJQUFQLEtBQWlCLE9BQU9BLElBQVAsSUFBZSxRQUFwQyxFQUE4QztBQUM3QyxTQUFPQSxJQUFQO0FBQ0E7O0FBRUQsUUFBT0EsS0FBS0MsT0FBTCxDQUFjTixhQUFkLEVBQTZCLEdBQTdCO0FBQ0xNLFFBREssQ0FDSUwsaUJBREosRUFDdUIsVUFBRU0sS0FBRixVQUFhQSxNQUFNRCxPQUFOLENBQWVDLEtBQWYsUUFBMkJBLEtBQTNCLENBQWIsRUFEdkI7QUFFTEQsUUFGSyxDQUVJSixhQUZKLEVBRW1CLEdBRm5CO0FBR0xJLFFBSEssQ0FHSUgsWUFISixFQUdrQixFQUhsQixDQUFQO0FBSUEsQ0FqQkQ7O0FBbUJBSyxPQUFPQyxPQUFQLEdBQWlCTCxLQUFqQiIsImZpbGUiOiJkaXNkby5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkaXNkb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGlzZG8vZGlzZG8uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImRpc2RvLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRpc2RvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kaXNkby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImRpc2RvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0VHJhbnNmb3JtIGFueSBodW1hbiByZWFkYWJsZSBhbHBoYW51bWVyaWMgc3RyaW5nIGRpdmlkZWQgYnkgY2VydGFpbiBjaGFyYWN0ZXJzXG5cdFx0XHRpbnRvIHNwYWNlIHNlcGFyYXRlZCBmb3JtLiBMYXRpbiB3b3JkIGZvciBzcHJlYWQuXG5cblx0XHRBbGwgc3BlY2lhbCBjaGFyYWN0ZXJzIG9uIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG5vbi1hbHBoYW51bWVyaWMgd29yZCB3aWxsIGJlIGRpc2NhcmRlZC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuXG5jb25zdCBDTEVBTl9QQVRURVJOID0gL1teYS16QS1aMC05XSsvZztcbmNvbnN0IFVQUEVSQ0FTRV9QQVRURVJOID0gL1tBLVpdKy9nO1xuY29uc3QgU1BBQ0VfUEFUVEVSTiA9IC9cXHMrL2c7XG5jb25zdCBEUk9QX1BBVFRFUk4gPSAvXlteYS16QS1aMC05XSt8W15hLXpBLVowLTldKyQvZztcblxuY29uc3QgZGlzZG8gPSBmdW5jdGlvbiBkaXNkbyggdGV4dCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInRleHQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCB0ZXh0ICkgfHwgdHlwZW9mIHRleHQgIT0gXCJzdHJpbmdcIiApe1xuXHRcdHJldHVybiB0ZXh0O1xuXHR9XG5cblx0cmV0dXJuIHRleHQucmVwbGFjZSggQ0xFQU5fUEFUVEVSTiwgXCIgXCIgKVxuXHRcdC5yZXBsYWNlKCBVUFBFUkNBU0VfUEFUVEVSTiwgKCBtYXRjaCApID0+IG1hdGNoLnJlcGxhY2UoIG1hdGNoLCBgICR7IG1hdGNoIH1gICkgKVxuXHRcdC5yZXBsYWNlKCBTUEFDRV9QQVRURVJOLCBcIiBcIiApXG5cdFx0LnJlcGxhY2UoIERST1BfUEFUVEVSTiwgXCJcIiApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkaXNkbztcbiJdfQ==
//# sourceMappingURL=disdo.support.js.map
