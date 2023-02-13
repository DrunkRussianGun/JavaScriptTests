let ball = document.getElementById("ball");
assert(ball !== null, "Element #ball was not found");
assert(ball.offsetLeft === 0, "Expected offsetLeft to be 10, but was " + ball.offsetLeft);
assert(ball.offsetTop === 0, "Expected offsetTop to be 10, but was " + ball.offsetTop);

function assert(condition, errorMessage) {
	if (!condition)
		throw new Error(errorMessage ?? "Assertion failed");
}
