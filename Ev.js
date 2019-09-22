const Ev = {
	_: new Map(),
	/**
	 * Subscribes a callback to an event
	 * @param {string} name - Name of an event
	 * @param {Function} callback - Function that should be called when event is emitted
	 */
	on: (name, callback) => (_.get(name) || (_.set(name, new Map()))).set(callback, 0),
	/**
	 * Event gets emitted thus calling all subscribed function with some data
	 * @param {string} name - Name of an event 
	 * @param {any} data - Data that gets passed as an argument to subscibed functions 
	 */
	go: (name, data) => _.has(name) && _.get(name).forEach((z, callback) => callback(data)),
	/**
	 * Unsubscribes a callback from an event or removes the whole event
	 * @param {string} name - Name of an event
	 * @param {Function} callback - Function that should be unsubscribed
	 */
	un: (name, callback) => _.has(name) && callback 
		? _[name].delete(callback) 
		: _.delete(name)
};



// Example usage
// Note that callback has to be stored if you want to later on unsubscribe it, otherwise callback can be inline right in Ev.on
const logTime = data => console.log(`App initialized in: ${data.time}ms`);

Ev.on("app:init", logTime);
Ev.on("app:init", data => data.user && this.fetchUserData(data.user));
Ev.on("app:init", function(data) { 
	let msg = Texts.getRandomWaitingMsg();
	msg = msg.toUpperCase();

	console.log(msg);
});

// .. some code

Ev.go("app:init", {
	time: getTimeFromStart(),
	user: getLoggedUserName()
});	
// App initialized in: 25ms
// PLANTING TREES

// .. some code

Ev.un("app:init", logTime);	// Unsubscribes only logTime
							// or
Ev.un("app:init");			// Removes the whole event thus unsubscribing all subscribed functions