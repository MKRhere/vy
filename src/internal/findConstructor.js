export const findConstructor = x => {
	if (Array.isArray(x)) return Array.from;
	if (x instanceof Map) return Map;
	if (x instanceof Set) return Set;
	if (typeof x === "object") return Object.fromEntries;
	if (typeof x === "string") return String;
	return Array.from;
};
