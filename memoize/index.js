function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

module.exports = function memoize(fn) {
    const allArgs = [];
    const res = {};

    return function() {
        const currArgs = Array.from(arguments);
        let idx = allArgs.find(ele => arraysEqual(ele, currArgs));

        if (idx === undefined) {
            allArgs.push(currArgs);
            idx = allArgs.length - 1;
            res[idx] = fn.apply(this, currArgs);
        }

        return res[idx];
    };
};
