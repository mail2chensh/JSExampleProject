/**
 * Created by dev on 2016/10/17.
 */

var EHandler = {};
if (typeof document.addEventListener != "undefined") {

    EHandler.add = function (element, eType, eFunc) {
        if (eType == "load") {
            if (typeof window.onload == "function") {
                var existingOnLoad = window.onload;
                window.onload = function () {
                    existingOnLoad();
                    eFunc();
                }
            } else {
                window.onload = eFunc;
            }
        } else {
            element.addEventListener(eType, eFunc, false);
        }
    };

}

