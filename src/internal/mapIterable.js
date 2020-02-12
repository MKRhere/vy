export function* mapIterable(f, xs) {
	let i = 0;
	for (const x of xs) {
		yield f(x, ++i);
	}
}
