module.exports = function map(array, fn, thisArg) {
    const res = [];

    array.forEach((val, index) => {
        res.push(fn.call(thisArg, val, index, array));
    });

    return res;
};
