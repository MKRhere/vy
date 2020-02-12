import { constructorMap } from "./internal/constructorMap";

export const collect = (xs, Collector) => {
	// Explicit collector is passed
	if (Collector) return Collector(xs);

	// A guessed constructor is stored
	const cons = constructorMap.get(xs);
	if (cons) return cons(xs);

	// default behaviour
	return [...xs];
};
