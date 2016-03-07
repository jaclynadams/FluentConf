"use strict"

function foo(x,y,z,...args) { 

	return [x, ...args];
}

function bar() {
	var a1 = [ 2, 4 ];
	var a2 = [ 6, 8, 10, 12 ];

	return foo(...[...a1, ...a2]);  //2, 4, 6, 8, 10, 12
}

console.log(
	bar().join("") === "281012"
);
