module.exports = function once(fn) {
    const that = this;
    that.hasBeenCalled = false;

    return function() {
        if (!that.hasBeenCalled) {
            that.hasBeenCalled = true;
            that.val = fn.call(this, ...arguments);
        }

        return that.val;
    };
};
