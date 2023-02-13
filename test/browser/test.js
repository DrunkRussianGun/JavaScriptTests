assert(typeof null === typeof {});

function assert(condition, message) {
	if (!condition)
		throw new Error(message ?? "Assertion failed");
}
