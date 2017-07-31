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





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:


describe("raze", function () {


	var directory = __dirname;
	var testBridge = path.resolve(directory, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("\"disdo( \"hello-world\" )\"", function () {
		it("should have value 'hello world'", function () {

			assert.equal(disdo(true, true));

		});
	});

	describe("\"disdo( \"hello_world\" )\"", function () {
		it("should have value 'hello world'", function () {

			assert.equal(disdo(true, true));

		});
	});

	describe("\"disdo( \"helloWorld\" )\"", function () {
		it("should have value 'hello world'", function () {

			assert.equal(disdo(true, true));

		});
	});

	describe("\"disdo( \"hello world\" )\"", function () {
		it("should have value 'hello world'", function () {

			assert.equal(disdo(true, true));

		});
	});

	describe("\"disdo( \"hello World\" )\"", function () {
		it("should have value 'hello world'", function () {

			assert.equal(disdo(true, true));

		});
	});


});


//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwiZXF1YWwiLCJkaXNkbyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUSxRQUFSLENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUSxNQUFSLENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7O0FBR0FFLFNBQVMsTUFBVCxFQUFpQixZQUFPOzs7QUFHdkIsS0FBSUMsWUFBWUMsU0FBaEI7QUFDQSxLQUFJQyxhQUFhSixLQUFLSyxPQUFMLENBQWNILFNBQWQsRUFBeUIsYUFBekIsQ0FBakI7QUFDQSxLQUFJSSx3QkFBdUJGLFVBQTNCOztBQUVBSCwwQ0FBcUMsWUFBTztBQUMzQ00sS0FBRyxpQ0FBSCxFQUFzQyxZQUFPOztBQUU1Q1QsVUFBT1UsS0FBUCxDQUFjQyxNQUFPLElBQVAsRUFBYSxJQUFiLENBQWQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFSLDBDQUFxQyxZQUFPO0FBQzNDTSxLQUFHLGlDQUFILEVBQXNDLFlBQU87O0FBRTVDVCxVQUFPVSxLQUFQLENBQWNDLE1BQU8sSUFBUCxFQUFhLElBQWIsQ0FBZDs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQVIseUNBQW9DLFlBQU87QUFDMUNNLEtBQUcsaUNBQUgsRUFBc0MsWUFBTzs7QUFFNUNULFVBQU9VLEtBQVAsQ0FBYUMsTUFBTyxJQUFQLEVBQWEsSUFBYixDQUFiOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBUiwwQ0FBcUMsWUFBTztBQUMzQ00sS0FBRyxpQ0FBSCxFQUFzQyxZQUFPOztBQUU1Q1QsVUFBT1UsS0FBUCxDQUFhQyxNQUFPLElBQVAsRUFBYSxJQUFiLENBQWI7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFSLDBDQUFxQyxZQUFPO0FBQzNDTSxLQUFHLGlDQUFILEVBQXNDLFlBQU87O0FBRTVDVCxVQUFPVSxLQUFQLENBQWFDLE1BQU8sSUFBUCxFQUFhLElBQWIsQ0FBYjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0EsQ0FoREQ7OztBQW1EQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJkaXNkb1wiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJkaXNkby90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZGlzZG8uZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJkaXNkb1wiOiBcImRpc2RvXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoXCJzaG91bGRcIik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuLy86IEBlbmQtYnJpZGdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuXHJcblxyXG5kZXNjcmliZShcInJhemVcIiwgKCApID0+IHtcclxuXHJcblxyXG5cdGxldCBkaXJlY3RvcnkgPSBfX2Rpcm5hbWU7XHJcblx0bGV0IHRlc3RCcmlkZ2UgPSBwYXRoLnJlc29sdmUoIGRpcmVjdG9yeSwgXCJicmlkZ2UuaHRtbFwiICk7XHJcblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgdGVzdEJyaWRnZSB9YDtcclxuXHJcblx0ZGVzY3JpYmUoYFwiZGlzZG8oIFwiaGVsbG8td29ybGRcIiApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoXCJzaG91bGQgaGF2ZSB2YWx1ZSAnaGVsbG8gd29ybGQnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRpc2RvKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0ZGVzY3JpYmUoYFwiZGlzZG8oIFwiaGVsbG9fd29ybGRcIiApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoXCJzaG91bGQgaGF2ZSB2YWx1ZSAnaGVsbG8gd29ybGQnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRpc2RvKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0ZGVzY3JpYmUoYFwiZGlzZG8oIFwiaGVsbG9Xb3JsZFwiIClcImAsICggKSA9PiB7XHJcblx0XHRpdChcInNob3VsZCBoYXZlIHZhbHVlICdoZWxsbyB3b3JsZCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbChkaXNkbyggdHJ1ZSwgdHJ1ZSApICk7XHJcblxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdGRlc2NyaWJlKGBcImRpc2RvKCBcImhlbGxvIHdvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KFwic2hvdWxkIGhhdmUgdmFsdWUgJ2hlbGxvIHdvcmxkJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKGRpc2RvKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0ZGVzY3JpYmUoYFwiZGlzZG8oIFwiaGVsbG8gV29ybGRcIiApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoXCJzaG91bGQgaGF2ZSB2YWx1ZSAnaGVsbG8gd29ybGQnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoZGlzZG8oIHRydWUsIHRydWUgKSApO1xyXG5cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vOiBAZW5kLWJyaWRnZSJdfQ==
//# sourceMappingURL=test.bridge.js.map
