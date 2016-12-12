/// <reference path="../typings/index.d.ts" />
"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.isInArray = function (arr) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!arr || arr.length === 0)
            return args.length === 0;
        var lookup = new Set(arr);
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var val = args_1[_a];
            if (!lookup.has(val))
                return false;
        }
        return true;
    };
    Utils.summator = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var res = 0;
        if (args.length > 1)
            for (var _a = 0, args_2 = args; _a < args_2.length; _a++) {
                var v = args_2[_a];
                res += Number(v);
            }
        return res;
    };
    Utils.getUnique = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var lookup = new Set();
        for (var _a = 0, args_3 = args; _a < args_3.length; _a++) {
            var val = args_3[_a];
            if (!lookup.has(val))
                lookup.add(val);
        }
        return Array.from(lookup);
    };
    return Utils;
}());
var testInArray = function () {
    console.log(Utils.isInArray([null]));
    console.log(Utils.isInArray([]));
    console.log(Utils.isInArray([1, 5, 7, 88], 5, 7, 1));
    console.log(Utils.isInArray([1, 5, 7, 88], 5, 7, 1, 99));
    console.log(Utils.isInArray([1, 5, 7, 'xx'], 5, 7));
    console.log(Utils.isInArray([1, 5, 7, 'xx'], 5, 'xx', 7));
    console.log(Utils.isInArray([1, 5, 7, 'xx'], 5, 'xx', 7, 'yy'));
};
var testSummator = function () {
    console.log(Utils.summator());
    //console.log(Utils.summator(null))
    console.log(Utils.summator(10, 20, 30));
    console.log(Utils.summator("a", "xx", "cc"));
    console.log(Utils.summator(10, 'zz', 30));
    console.log(Utils.summator(10, '5', 30));
};
var testUnique = function () {
    console.log(Utils.getUnique(1, 12, 15, 5, 4, 1));
    console.log(Utils.getUnique('xy', 'ab', 'cc', 'ab'));
};
console.log('testInArray');
testInArray();
console.log('testSummator');
testSummator();
console.log('testUnique');
testUnique();
//# sourceMappingURL=task1_4_utils.js.map