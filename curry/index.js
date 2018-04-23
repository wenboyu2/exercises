module.exports = function curry(fn) {
    return function curryInternal() {
        const prevArgs = this.args ? [...this.args] : [];
        const currArgs = prevArgs.concat(Array.from(arguments));

        if (currArgs.length === fn.length) {
            return fn.call(null, ...currArgs);
        }

        return curryInternal.bind({
            args: currArgs
        });
    };
};
