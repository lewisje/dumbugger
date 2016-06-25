(function (w) {
    'use strict';
    var onerror = w.onerror;
    function dumbugger(message, file, line, col, error) {
        var win = w.open('https://encrypted.google.com/search?pws=0&safe=off&num=100&complete=0&q=' + encodeURIComponent(message), '_blank');
        win.opener = null;
        win.focus();
    }
    w.onerror = typeof onerror = 'function' ? function (message, file, line, col, error) {
        onerror(message, file, line, col, error);
        dumbugger(message, file, line, col, error);
    } : dumbugger;
})(window);
