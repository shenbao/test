function max() {
    const nums = Array.prototype.slice.call(arguments);
    let max = 0;
    nums.forEach(n => {
        if (n > max) {
            max = n;
        }
    });
    return max;
}

Math.max(10, 20, 30, 40, 50)