function isFunction(functionToCheck) {
    return (
        functionToCheck &&
        {}.toString.call(functionToCheck) === '[object Function]'
    );
}

module.exports = function value(source) {
    let res = source;
    while (isFunction(res)) {
        res = res();
    }

    return res;
};
