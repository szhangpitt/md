'use strict';

function md () { }

md.h1 =
makeLeaderFn('#');

// function () {
//     return '# ' + applyFnsArgs(arguments);
// };

md.h2 =
makeLeaderFn('##');

md.h3 =
makeLeaderFn('###');

md.h4 =
makeLeaderFn('####');

md.h5 =
makeLeaderFn('#####');

md.code =
makeWrapperFn('`');

md.strikethrough =
md.st =
makeWrapperFn('~~');

md.b =
md.strong =
makeWrapperFn('**');

md.i =
md.em =
makeWrapperFn('*');

md.bq =
makeLeaderFn('>');

md.li =
makeLeaderFn('-');

md.sh =
md.shell =
function (/*code, fns*/) {
    return md.code(makeLeaderFn('$')(arguments[0]));
};

md.js =
makeWrapperFn(
    '```js\n',
    '\n```'
);

md.html =
makeWrapperFn(
    '```html\n',
    '\n```'
);

md.css =
makeWrapperFn(
    '```css\n',
    '\n```'
);

md.mapLines =
function (/*lines, fns*/) {
    var lines = arguments[0];
    var fns = getFnArgs(arguments);

    return lines.map(function (line) {
        return applyFns(line, fns);
    }).join('\n');
};

md.ol =
function (/*lines, fns*/) {
    var lines = arguments[0];
    var fns = getFnArgs(arguments);

    return lines.map(function (line, index) {
        return (index + 1) + '. ' + applyFns(line, fns);
    }).join('\n');
};

md.ul =
function (/*lines, fns*/) {
    var lines = arguments[0];
    var fns = getFnArgs(arguments);

    return lines.map(function (line, index) {
        return md.li(applyFns(line, fns));
    }).join('\n');
};

function makeWrapperFn (wrapper, wrapperEnd) {
    return function () {
        return wrapper + applyFnsArgs(arguments) +
        (typeof wrapperEnd === 'undefined' ? wrapper : wrapperEnd);
    };
}

function makeLeaderFn (leader) {
    return function () {
        return leader + ' ' + applyFnsArgs(arguments);
    };
}

function applyFns (input, fns) {
    var ret = input;

    fns.forEach(function (fn) {
        ret = fn(ret);
    });

    return ret;
}

function applyFnsArgs (args) {
    var text = getTextArg(args);
    var fns = getFnArgs(args);

    return applyFns(text, fns);
}

function getTextArg (args) {
    return args[0];
}

function getFnArgs (args) {
    return Array.prototype.slice.call(args, 1);
}

module.exports = md;
