/**
 * Safely accesses deeply nested value
 * @param {string[]} props - Objects properties in chronological order
 * @param {any} def - Default value when property doesn't exist
 * @returns {any} - Either a value of nested properties or the default value
 */
Object.prototype.get = function(props, def = {}) {
	let acc = this;

	for(let i = 0; i < props.length; i++) {
		acc = acc[props[i]];
		if(!acc) break;
	}

	return acc || def;
}

/**
 * Safely sets deeply nested value
 * @param {string[]} props - Objects properties in chronological order
 * @param {any} val - Value that gets set on the last property
 */
Object.prototype.set = function(props, val = null) {
	let acc = this;

	for(let i = 0; i < props.length; i++) {
		let prop = props[i];

		if(i === props.length - 1) acc[prop] = val;
		else if(!acc[prop]) acc[prop] = {};

		acc = acc[prop];  
	}	
}



// Example usage
const article = {
	author: {
		name: "Ayodeji Awosika",
		username: "@Chef_BoyarDEJI"
	},
	title: "How to Stop Caring About What Others Think About Your Dream",
	introtext: "One of the toughest pills to swallow? Often, your parents are a great example of what not to do.",
	published: 1569082036
};

article.set(["author", "name"], "Yamiteru XYZ");	// rewrites name on author
article.set(["author", "username"], "@yamiteru");	// rewrites username on author

article.set(["other", "readtime"], 9);				// creates other and sets readtime
article.set(["other", "random"], Math.random());	// sets random on already created other

console.log(article.get(["author", "name"]));		// Yamiteru XYZ
console.log(article.get(["other", "readtime"]));	// 9

console.log(article.get(["other", "readtim"]));		// {}
console.log(article.get(["hello"], "world"));		// world