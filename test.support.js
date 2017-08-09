"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "disdo",
              			"path": "disdo/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/disdo.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"disdo": "disdo"
              		}
              	@end-include
              */

var assert = require("should");



//: @client:
var disdo = require("./disdo.support.js");
//: @end-client






//: @client:

describe("disdo", function () {

	describe("`disdo( 'hello-world' )`", function () {
		it("should be equal to 'hello world'", function () {

			assert.equal(disdo("hello-world"), "hello world");

		});
	});


	describe("`disdo( 'hello_world' )`", function () {
		it("should be equal to 'hello world'", function () {

			assert.equal(disdo("hello_world"), "hello world");

		});
	});


	describe("`disdo( 'helloWorld' )`", function () {
		it("should be equal to 'hello world'", function () {

			assert.equal(disdo("helloWorld"), "hello World");

		});
	});


	describe("`disdo( 'hello world' )`", function () {
		it("should be equal to 'hello world'", function () {

			assert.equal(disdo("hello world"), "hello world");

		});
	});


	describe("`disdo( 'hello World' )`", function () {
		it("should be equal to 'hello world'", function () {

			assert.equal(disdo("hello World"), "hello World");

		});
	});
});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGlzZG8iLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLG9CQUFULENBQWQ7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLE9BQVYsRUFBbUIsWUFBTzs7QUFFekJBLFVBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q0MsS0FBSSxrQ0FBSixFQUF3QyxZQUFPOztBQUU5Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLGFBQVAsQ0FBZCxFQUFzQyxhQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FDLFVBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q0MsS0FBSSxrQ0FBSixFQUF3QyxZQUFPOztBQUU5Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLGFBQVAsQ0FBZCxFQUFzQyxhQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FDLFVBQVUseUJBQVYsRUFBcUMsWUFBTztBQUMzQ0MsS0FBSSxrQ0FBSixFQUF3QyxZQUFPOztBQUU5Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLFlBQVAsQ0FBZCxFQUFxQyxhQUFyQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FDLFVBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q0MsS0FBSSxrQ0FBSixFQUF3QyxZQUFPOztBQUU5Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLGFBQVAsQ0FBZCxFQUFzQyxhQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FDLFVBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q0MsS0FBSSxrQ0FBSixFQUF3QyxZQUFPOztBQUU5Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLGFBQVAsQ0FBZCxFQUFzQyxhQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDtBQU9BLENBN0NEOztBQStDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRpc2RvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkaXNkby90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZGlzZG8uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImRpc2RvXCI6IFwiZGlzZG9cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGRpc2RvID0gcmVxdWlyZSggXCIuL2Rpc2RvLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwiZGlzZG9cIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgZGlzZG8oICdoZWxsby13b3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvIHdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRpc2RvKCBcImhlbGxvLXdvcmxkXCIgKSwgXCJoZWxsbyB3b3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBkaXNkbyggJ2hlbGxvX3dvcmxkJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnaGVsbG8gd29ybGQnXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGlzZG8oIFwiaGVsbG9fd29ybGRcIiApLCBcImhlbGxvIHdvcmxkXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGRpc2RvKCAnaGVsbG9Xb3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvIHdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRpc2RvKCBcImhlbGxvV29ybGRcIiApLCBcImhlbGxvIFdvcmxkXCIgKTtcblxuXHRcdH0gKTtcblx0fSAgKTtcblxuXG5cdGRlc2NyaWJlKCBcImBkaXNkbyggJ2hlbGxvIHdvcmxkJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnaGVsbG8gd29ybGQnXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGlzZG8oIFwiaGVsbG8gd29ybGRcIiApLCBcImhlbGxvIHdvcmxkXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGRpc2RvKCAnaGVsbG8gV29ybGQnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsbyB3b3JsZCdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkaXNkbyggXCJoZWxsbyBXb3JsZFwiICksIFwiaGVsbG8gV29ybGRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG59KTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
