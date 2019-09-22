const E = {
	_: [],
	/**
	 * [S]ubscribes
	 * @param {string} n - [N]ame of an event
	 * @param {Function} c - [C]allback that will be called on publish
	 */
	s: (n, c) => _.push({n, c}),
	/**
	 * [P]publishes
	 * @param {string} n - [N]ame of an event
	 * @param {any} d - [D]ata to be passed to callback
	 */
	p: (n, d) => _.forEach(i => i.n == n && i.c(d))
};



// Example usage
Ev.s("item:add", (data) => console.log(`Item: ${data.id} has been added`));
Ev.s("item:remove", (data) => console.log(`Item: ${data.id} has been removed`));

// .. some code

const item = { id: "item123456" };

Ev.p("item:add", item);		// Item: item123456 has been added 
Ev.p("item:remove", item);	// Item: item123456 has been removed