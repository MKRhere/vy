import { mapIterable } from "./internal/mapIterable";
import { mapObject } from "./internal/mapObject";
import { findConstructor } from "./internal/findConstructor";
import { constructorMap } from "./internal/constructorMap";

// map :: (x -> y) -> Iterator x -> Iterator y

export const map = f => xs => {
	const iter = xs[Symbol.iterator];

	let ret;

	if (iter) ret = mapIterable(f, xs);
	else if (typeof xs.map === "function") ret = xs.map(f);
	else if (typeof xs === "object") ret = mapObject(f, xs);
	else throw new Error("Cannot map over type", typeof xs);

	constructorMap.set(ret, findConstructor(xs));
};
