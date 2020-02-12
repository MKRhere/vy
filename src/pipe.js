import liftPromise from './liftPromise';

/* Pipe a value or promise through any number of unary functions */
const pipe =
	(...fns) => arg =>
		fns.reduce((acc, fn) => liftPromise(fn, acc), arg);

export default pipe;
