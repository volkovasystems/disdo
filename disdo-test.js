
const assert = require( "assert" );
const disdo = require( "./disdo.js" );

assert.equal( disdo( "hello-world" ), "hello world", "should be equal to 'hello world'" );

assert.equal( disdo( "hello_world" ), "hello world", "should be equal to 'hello world'" );

assert.equal( disdo( "helloWorld" ), "hello World", "should be equal to 'hello World'" );

assert.equal( disdo( "hello world" ), "hello world", "should be equal to 'hello world'" );

assert.equal( disdo( "hello World" ), "hello World", "should be equal to 'hello World'" );

console.log( "ok" );
