import { isIOS } from "@nativescript/core";

export const runOnUIThread = (function () {
    if (isIOS) {
        const runloop = CFRunLoopGetMain();
        return function (func) {
            if (runloop && func) {
                CFRunLoopPerformBlock(runloop, kCFRunLoopDefaultMode, func);
                CFRunLoopWakeUp(runloop);
            } else if (func) {
                func();
            }
        };
    } else {
        return function (func) {
            if (func) {
                func();
            }
        };
    }
})();

