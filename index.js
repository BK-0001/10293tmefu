"use strict";
const object = {
    bubbles: false,
    cancelBubble: false,
    cancelable: false,
    composed: false,
    currentTarget: null,
    defaultPrevented: false,
    eventPhase: 0,
    isTrusted: false,
    returnValue: false,
    srcElement: null,
    target: null,
    timeStamp: 0,
    type: "",
    composedPath: function () {
        throw new Error("Function not implemented.");
    },
    initEvent: function (type, bubbles, cancelable) {
        throw new Error("Function not implemented.");
    },
    preventDefault: function () {
        throw new Error("Function not implemented.");
    },
    stopImmediatePropagation: function () {
        throw new Error("Function not implemented.");
    },
    stopPropagation: function () {
        throw new Error("Function not implemented.");
    },
    NONE: 0,
    CAPTURING_PHASE: 1,
    AT_TARGET: 2,
    BUBBLING_PHASE: 3
};
