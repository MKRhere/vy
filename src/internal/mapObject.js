export function* mapObject(f, o) {
	for (const k in o) {
		yield [k, f(o[k], k)];
	}
}
