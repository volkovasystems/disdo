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

	describe("\"disdo( \"hello-world\" )\"", function () {
		it("should have value 'hello world'", function () {

			assert.equal(disdo("hello-world"), "hello world");

		});
	});

	describe("\"disdo( \"hello_world\" )\"", function () {
		it("should have value 'hello world'", function () {

			assert.equal(disdo("hello_world"), "hello world");

		});
	});

	describe("\"disdo( \"helloWorld\" )\"", function () {
		it("should have value 'hello world'", function () {

			assert.equal(disdo("helloWorld"), "hello World");

		});
	});

	describe("\"disdo( \"hello world\" )\"", function () {
		it("should have value 'hello world'", function () {

			assert.equal(disdo("hello world"), "hello world");

		});
	});

	describe("\"disdo( \"hello World\" )\"", function () {
		it("should have value 'hello world'", function () {

			assert.equal(disdo("hello World"), "hello World");

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGlzZG8iLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxRQUFRRCxRQUFRLG9CQUFSLENBQWQ7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFTLE9BQVQsRUFBa0IsWUFBTzs7QUFFeEJBLDBDQUFxQyxZQUFPO0FBQzNDQyxLQUFHLGlDQUFILEVBQXNDLFlBQU87O0FBRTVDSixVQUFPSyxLQUFQLENBQWFILE1BQU0sYUFBTixDQUFiLEVBQW1DLGFBQW5DOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQywwQ0FBcUMsWUFBTztBQUMzQ0MsS0FBRyxpQ0FBSCxFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssS0FBUCxDQUFhSCxNQUFNLGFBQU4sQ0FBYixFQUFtQyxhQUFuQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMseUNBQW9DLFlBQU87QUFDMUNDLEtBQUcsaUNBQUgsRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLEtBQVAsQ0FBYUgsTUFBTSxZQUFOLENBQWIsRUFBa0MsYUFBbEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLDBDQUFxQyxZQUFPO0FBQzNDQyxLQUFHLGlDQUFILEVBQXNDLFlBQU87O0FBRTVDSixVQUFPSyxLQUFQLENBQWFILE1BQU0sYUFBTixDQUFiLEVBQW1DLGFBQW5DOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQywwQ0FBcUMsWUFBTztBQUMzQ0MsS0FBRyxpQ0FBSCxFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssS0FBUCxDQUFhSCxNQUFNLGFBQU4sQ0FBYixFQUFtQyxhQUFuQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQSxDQTFDRDs7QUE0Q0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImRpc2RvXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImRpc2RvL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kaXNkby5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcImRpc2RvXCI6IFwiZGlzZG9cIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZShcInNob3VsZFwiKTtcclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmNvbnN0IGRpc2RvID0gcmVxdWlyZShcIi4vZGlzZG8uc3VwcG9ydC5qc1wiKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OiBcclxuXHJcbmRlc2NyaWJlKFwiZGlzZG9cIiwgKCApID0+IHtcclxuXHJcblx0ZGVzY3JpYmUoYFwiZGlzZG8oIFwiaGVsbG8td29ybGRcIiApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoXCJzaG91bGQgaGF2ZSB2YWx1ZSAnaGVsbG8gd29ybGQnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoZGlzZG8oXCJoZWxsby13b3JsZFwiKSwgXCJoZWxsbyB3b3JsZFwiICk7XHJcblxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdGRlc2NyaWJlKGBcImRpc2RvKCBcImhlbGxvX3dvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KFwic2hvdWxkIGhhdmUgdmFsdWUgJ2hlbGxvIHdvcmxkJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKGRpc2RvKFwiaGVsbG9fd29ybGRcIiksIFwiaGVsbG8gd29ybGRcIiApO1xyXG5cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRkZXNjcmliZShgXCJkaXNkbyggXCJoZWxsb1dvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KFwic2hvdWxkIGhhdmUgdmFsdWUgJ2hlbGxvIHdvcmxkJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKGRpc2RvKFwiaGVsbG9Xb3JsZFwiKSwgXCJoZWxsbyBXb3JsZFwiICk7XHJcblxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdGRlc2NyaWJlKGBcImRpc2RvKCBcImhlbGxvIHdvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KFwic2hvdWxkIGhhdmUgdmFsdWUgJ2hlbGxvIHdvcmxkJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKGRpc2RvKFwiaGVsbG8gd29ybGRcIiksIFwiaGVsbG8gd29ybGRcIiApO1xyXG5cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRkZXNjcmliZShgXCJkaXNkbyggXCJoZWxsbyBXb3JsZFwiIClcImAsICggKSA9PiB7XHJcblx0XHRpdChcInNob3VsZCBoYXZlIHZhbHVlICdoZWxsbyB3b3JsZCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbChkaXNkbyhcImhlbGxvIFdvcmxkXCIpLCBcImhlbGxvIFdvcmxkXCIgKTtcclxuXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn0pO1xyXG5cclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuIl19
//# sourceMappingURL=test.support.js.map
