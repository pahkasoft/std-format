/**
 * Polyfill for Array.from for ES5 environments
 * 
 *  // In tsup.config.ts have:
 *  esbuildOptions(options) {
 *      options.inject = ['./src/polyfills.ts'];
 *  },
 */

/**
 * There was use of Array.from() in the bundle.
 */
if (!Array.from) {
    Array.from = function (arrayLike: any) {
        var arr = [];
        for (var i = 0; i < arrayLike.length; i++) {
            arr.push(arrayLike[i]);
        }
        return arr;
    };
}
