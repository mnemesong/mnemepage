"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rerenderStyleBlock = void 0;
var rerenderStyleBlock = function (css) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = (head.querySelector("style"))
        ? head.querySelector("style")
        : (function () {
            head.appendChild(document.createElement('style'));
            return head.querySelector("style");
        })();
    style.innerHTML = css;
};
exports.rerenderStyleBlock = rerenderStyleBlock;
