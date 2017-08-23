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

describe("disdo", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`disdo( 'hello-world' )`", function () {
		it("should be equal to 'hello world'", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return disdo("hello-world");
			}).

			value;

			assert.equal(result, "hello world");

		});
	});

	describe("`disdo( 'hello_world' )`", function () {
		it("should be equal to 'hello world'", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return disdo("hello_world");
			}).

			value;

			assert.equal(result, "hello world");

		});
	});

	describe("`disdo( 'helloWorld' )`", function () {
		it("should be equal to 'hello World'", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return disdo("helloWorld");
			}).

			value;

			assert.equal(result, "hello World");

		});
	});

	describe("`disdo( 'hello world' )`", function () {
		it("should be equal to 'hello world'", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return disdo("hello world");
			}).

			value;

			assert.equal(result, "hello world");

		});
	});

	describe("`disdo( 'hello World' )`", function () {
		it("should be equal to 'hello World'", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return disdo("hello World");
			}).

			value;

			assert.equal(result, "hello World");

		});
	});

});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImRpc2RvIiwidmFsdWUiLCJlcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNJLEtBQUksa0NBQUosRUFBd0MsWUFBTzs7QUFFOUMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsTUFBTyxhQUFQLENBQVA7QUFDQSxJQUpXOztBQU1YQyxRQU5GOztBQVFBYixVQUFPYyxLQUFQLENBQWNOLE1BQWQsRUFBc0IsYUFBdEI7O0FBRUEsR0FaRDtBQWFBLEVBZEQ7O0FBZ0JBTCxVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNJLEtBQUksa0NBQUosRUFBd0MsWUFBTzs7QUFFOUMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsTUFBTyxhQUFQLENBQVA7QUFDQSxJQUpXOztBQU1YQyxRQU5GOztBQVFBYixVQUFPYyxLQUFQLENBQWNOLE1BQWQsRUFBc0IsYUFBdEI7O0FBRUEsR0FaRDtBQWFBLEVBZEQ7O0FBZ0JBTCxVQUFVLHlCQUFWLEVBQXFDLFlBQU87QUFDM0NJLEtBQUksa0NBQUosRUFBd0MsWUFBTzs7QUFFOUMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsTUFBTyxZQUFQLENBQVA7QUFDQSxJQUpXOztBQU1YQyxRQU5GOztBQVFBYixVQUFPYyxLQUFQLENBQWNOLE1BQWQsRUFBc0IsYUFBdEI7O0FBRUEsR0FaRDtBQWFBLEVBZEQ7O0FBZ0JBTCxVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNJLEtBQUksa0NBQUosRUFBd0MsWUFBTzs7QUFFOUMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsTUFBTyxhQUFQLENBQVA7QUFDQSxJQUpXOztBQU1YQyxRQU5GOztBQVFBYixVQUFPYyxLQUFQLENBQWNOLE1BQWQsRUFBc0IsYUFBdEI7O0FBRUEsR0FaRDtBQWFBLEVBZEQ7O0FBZ0JBTCxVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNJLEtBQUksa0NBQUosRUFBd0MsWUFBTzs7QUFFOUMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsTUFBTyxhQUFQLENBQVA7QUFDQSxJQUpXOztBQU1YQyxRQU5GOztBQVFBYixVQUFPYyxLQUFQLENBQWNOLE1BQWQsRUFBc0IsYUFBdEI7O0FBRUEsR0FaRDtBQWFBLEVBZEQ7O0FBZ0JBLENBcEZEO0FBcUZBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkaXNkb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGlzZG8vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Rpc2RvLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJkaXNkb1wiOiBcImRpc2RvXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcImRpc2RvXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBkaXNkbyggJ2hlbGxvLXdvcmxkJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnaGVsbG8gd29ybGQnXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZGlzZG8oIFwiaGVsbG8td29ybGRcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcImhlbGxvIHdvcmxkXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkaXNkbyggJ2hlbGxvX3dvcmxkJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnaGVsbG8gd29ybGQnXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gZGlzZG8oIFwiaGVsbG9fd29ybGRcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcImhlbGxvIHdvcmxkXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkaXNkbyggJ2hlbGxvV29ybGQnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsbyBXb3JsZCdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBkaXNkbyggXCJoZWxsb1dvcmxkXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJoZWxsbyBXb3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGlzZG8oICdoZWxsbyB3b3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvIHdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGRpc2RvKCBcImhlbGxvIHdvcmxkXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJoZWxsbyB3b3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGlzZG8oICdoZWxsbyBXb3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvIFdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGRpc2RvKCBcImhlbGxvIFdvcmxkXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJoZWxsbyBXb3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
