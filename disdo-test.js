
const assert = require( "assert" );
const disdo = require( "./disdo.js" );

assert.equal( disdo( "hello-world" ), "hello world", "should have value 'hello world'" );

assert.equal( disdo( "hello_world" ), "hello world", "should have value 'hello world'" );

assert.equal( disdo( "helloWorld" ), "hello World", "should have value 'hello world'" );

assert.equal( disdo( "hello world" ), "hello world", "should have value 'hello world'" );

assert.equal( disdo( "hello World" ), "hello World", "should have value 'hello World'" );

console.log( "ok" );
