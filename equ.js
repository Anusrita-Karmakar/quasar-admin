const parent = {};
function GFG(v) {
	if (v === parent[v]) {
		return v;
	}
	return parent[v] = GFG(parent[v]);
}
// Function to merge two variables into 
// single set
function union(a, b) {
	a = GFG(a);
	b = GFG(b);
	if (a !== b) {
		parent[b] = a;
	}
}
// Function to determine if the given 
// equations are satisfactory
function satisfactoryEquation(arr) {
	// Initialize the parent object
	for (let i = 0; i < 26; i++) {
		parent[String.fromCharCode('a'.charCodeAt(0) + i)] = String.fromCharCode('a'.charCodeAt(0) + i);
	}
	// Iterate through equations of type 2
	for (const e of arr) {
		const a = e.charCodeAt(0) - 'a'.charCodeAt(0);
		const b = e.charCodeAt(3) - 'a'.charCodeAt(0);
		const c = e[1];
		// Check for type 2 equation
		if (c === '=') {
			// Merge the variables of type 2 equations
			union(String.fromCharCode('a'.charCodeAt(0) + a), String.fromCharCode('a'.charCodeAt(0) + b));
		}
	}
	// Iterate through equations of type 1
	for (const e of arr) {
		// Check for type 1 equation
		if (e[1] === '!') {
			const a = e.charCodeAt(0) - 'a'.charCodeAt(0);
			const b = e.charCodeAt(3) - 'a'.charCodeAt(0);
			// If parents of both variables are the same
			// we have a contradiction
			if (GFG(String.fromCharCode('a'.charCodeAt(0) + a)) === GFG(String.fromCharCode('a'.charCodeAt(0) + b))) {
				return "False";
			}
		}
	}
	return "True";
}
// Driver code
function main() {
	const arr = ["a==b", "a==c", "b!=c"];
	// Function call
	console.log(satisfactoryEquation(arr));
}
main();
