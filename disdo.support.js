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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2RvLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwiQ0xFQU5fUEFUVEVSTiIsIlVQUEVSQ0FTRV9QQVRURVJOIiwiU1BBQ0VfUEFUVEVSTiIsIkRST1BfUEFUVEVSTiIsImRpc2RvIiwidGV4dCIsInJlcGxhY2UiLCJtYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNQyxnQkFBZ0IsZ0JBQXRCO0FBQ0EsSUFBTUMsb0JBQW9CLFNBQTFCO0FBQ0EsSUFBTUMsZ0JBQWdCLE1BQXRCO0FBQ0EsSUFBTUMsZUFBZSxnQ0FBckI7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxJQUFoQixFQUFzQjtBQUNuQzs7Ozs7Ozs7QUFRQSxLQUFJUCxNQUFPTyxJQUFQLEtBQWlCLE9BQU9BLElBQVAsSUFBZSxRQUFwQyxFQUE4QztBQUM3QyxTQUFPQSxJQUFQO0FBQ0E7O0FBRUQsUUFBT0EsS0FBS0MsT0FBTCxDQUFjTixhQUFkLEVBQTZCLEdBQTdCO0FBQ0xNLFFBREssQ0FDSUwsaUJBREosRUFDdUIsVUFBRU0sS0FBRixVQUFhQSxNQUFNRCxPQUFOLENBQWVDLEtBQWYsUUFBMkJBLEtBQTNCLENBQWIsRUFEdkI7QUFFTEQsUUFGSyxDQUVJSixhQUZKLEVBRW1CLEdBRm5CO0FBR0xJLFFBSEssQ0FHSUgsWUFISixFQUdrQixFQUhsQixDQUFQO0FBSUEsQ0FqQkQ7O0FBbUJBSyxPQUFPQyxPQUFQLEdBQWlCTCxLQUFqQiIsImZpbGUiOiJkaXNkby5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImRpc2RvXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImRpc2RvL2Rpc2RvLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImRpc2RvLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiZGlzZG9cIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZGlzZG8uZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImRpc2RvLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0VHJhbnNmb3JtIGFueSBodW1hbiByZWFkYWJsZSBhbHBoYW51bWVyaWMgc3RyaW5nIGRpdmlkZWQgYnkgY2VydGFpbiBjaGFyYWN0ZXJzXHJcblx0XHRcdGludG8gc3BhY2Ugc2VwYXJhdGVkIGZvcm0uIExhdGluIHdvcmQgZm9yIHNwcmVhZC5cclxuXHJcblx0XHRBbGwgc3BlY2lhbCBjaGFyYWN0ZXJzIG9uIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG5vbi1hbHBoYW51bWVyaWMgd29yZCB3aWxsIGJlIGRpc2NhcmRlZC5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcblxyXG5jb25zdCBDTEVBTl9QQVRURVJOID0gL1teYS16QS1aMC05XSsvZztcclxuY29uc3QgVVBQRVJDQVNFX1BBVFRFUk4gPSAvW0EtWl0rL2c7XHJcbmNvbnN0IFNQQUNFX1BBVFRFUk4gPSAvXFxzKy9nO1xyXG5jb25zdCBEUk9QX1BBVFRFUk4gPSAvXlteYS16QS1aMC05XSt8W15hLXpBLVowLTldKyQvZztcclxuXHJcbmNvbnN0IGRpc2RvID0gZnVuY3Rpb24gZGlzZG8oIHRleHQgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInRleHQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggdGV4dCApIHx8IHR5cGVvZiB0ZXh0ICE9IFwic3RyaW5nXCIgKXtcclxuXHRcdHJldHVybiB0ZXh0O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRleHQucmVwbGFjZSggQ0xFQU5fUEFUVEVSTiwgXCIgXCIgKVxyXG5cdFx0LnJlcGxhY2UoIFVQUEVSQ0FTRV9QQVRURVJOLCAoIG1hdGNoICkgPT4gbWF0Y2gucmVwbGFjZSggbWF0Y2gsIGAgJHsgbWF0Y2ggfWAgKSApXHJcblx0XHQucmVwbGFjZSggU1BBQ0VfUEFUVEVSTiwgXCIgXCIgKVxyXG5cdFx0LnJlcGxhY2UoIERST1BfUEFUVEVSTiwgXCJcIiApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkaXNkbztcclxuIl19
//# sourceMappingURL=disdo.support.js.map
