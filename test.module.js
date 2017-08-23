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

const assert = require( "should" );

//: @server:
const disdo = require( "./disdo.js" );
//: @end-server

//: @client:
const disdo = require( "./disdo.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "disdo", ( ) => {

	describe( "`disdo( 'hello-world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			assert.equal( disdo( "hello-world" ), "hello world" );

		} );
	} );

	describe( "`disdo( 'hello_world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			assert.equal( disdo( "hello_world" ), "hello world" );

		} );
	} );

	describe( "`disdo( 'helloWorld' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			assert.equal( disdo( "helloWorld" ), "hello World" );

		} );
	} );

	describe( "`disdo( 'hello world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			assert.equal( disdo( "hello world" ), "hello world" );

		} );
	} );

	describe( "`disdo( 'hello World' )`", ( ) => {
		it( "should be equal to 'hello World'", ( ) => {

			assert.equal( disdo( "hello World" ), "hello World" );

		} );
	} );

} );


//: @end-server


//: @client:

describe( "disdo", ( ) => {

	describe( "`disdo( 'hello-world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			assert.equal( disdo( "hello-world" ), "hello world" );

		} );
	} );

	describe( "`disdo( 'hello_world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			assert.equal( disdo( "hello_world" ), "hello world" );

		} );
	} );

	describe( "`disdo( 'helloWorld' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			assert.equal( disdo( "helloWorld" ), "hello World" );

		} );
	}  );

	describe( "`disdo( 'hello world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			assert.equal( disdo( "hello world" ), "hello world" );

		} );
	} );

	describe( "`disdo( 'hello World' )`", ( ) => {
		it( "should be equal to 'hello World'", ( ) => {

			assert.equal( disdo( "hello World" ), "hello World" );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "disdo", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`disdo( 'hello-world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return disdo( "hello-world" );
				}

			).value;

			assert.equal( result, "hello world" );

		} );
	} );

	describe( "`disdo( 'hello_world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return disdo( "hello_world" );
				}

			).value;

			assert.equal( result, "hello world" );

		} );
	} );

	describe( "`disdo( 'helloWorld' )`", ( ) => {
		it( "should be equal to 'hello World'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return disdo( "helloWorld" );
				}

			).value;

			assert.equal( result, "hello World" );

		} );
	} );

	describe( "`disdo( 'hello world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return disdo( "hello world" );
				}

			).value;

			assert.equal( result, "hello world" );

		} );
	} );

	describe( "`disdo( 'hello World' )`", ( ) => {
		it( "should be equal to 'hello World'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return disdo( "hello World" );
				}

			).value;

			assert.equal( result, "hello World" );

		} );
	} );

} );
//: @end-bridge
