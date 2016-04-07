'use strict';

var expect = require('chai').expect;
var md = require('../lib/md');

var logAndReturn = function (text) {
    console.log(text);
    return text;
};

describe('md', function  () {
    var text;
    var code;
    var css;
    var html;
    var lines;

    beforeEach(function () {
        text = 'markdown generator' ;
        code = 'md.strikethrough()';
        css = '.center { margin-left: auto; margin-right: auto }';
        html = '<p class="center">I am some html content</p>';
        lines = ['line1', 'line2'];
    });

    it('should h1', function () {
        expect(
            logAndReturn(md.h1(text))
        ).to.equal('# markdown generator');
    });

    it('should h2', function () {
        expect(
            logAndReturn(md.h2(text))
        ).to.equal('## markdown generator');
    });

    it('should h3', function () {
        expect(
            logAndReturn(md.h2(text))
        ).to.equal('## markdown generator');
    });

    it('should st', function () {
        expect(
            logAndReturn(md.st(text))
        ).to.equal('~~markdown generator~~');
    });

    it('should b/strong', function () {
        expect(
            logAndReturn(md.b(text))
        ).to.equal('**markdown generator**');
    });

    it('should i/em', function () {
        expect(
            logAndReturn(md.i(text))
        ).to.equal('*markdown generator*');
    });

    it('should bq', function () {
        expect(
            logAndReturn(md.bq(text))
        ).to.equal('> markdown generator');
    });

    it('should li', function () {
        expect(
            logAndReturn(md.li(text))
        ).to.equal('- markdown generator');
    });

    it('should sh/shell', function () {
        expect(
            logAndReturn(md.sh(text))
        ).to.equal('$ markdown generator');
    });

    it('should code', function () {
        expect(
            logAndReturn(md.code(code))
        ).to.equal('`md.strikethrough()`');
    });

    it('should ol', function () {
        expect(
            logAndReturn(md.ol(lines))
        ).to.equal('1. line1\n2. line2');
    });

    it('should ol after code', function () {
        expect(
            logAndReturn(md.ol(lines, md.code))
        ).to.equal('1. `line1`\n2. `line2`');
    });

    it('should ul', function () {
        expect(
            logAndReturn(md.ul(lines))
        ).to.equal('- line1\n- line2');
    });

    it('should ul after code', function () {
        expect(
            logAndReturn(md.ul(lines, md.code))
        ).to.equal('- `line1`\n- `line2`');
    });

    it('should js', function () {
        expect(
            logAndReturn(md.js(code))
        ).to.equal('```js\nmd.strikethrough()\n```');
    });

    it('should js/html/css', function () {
        expect(
            logAndReturn(md.html(html))
        ).to.equal(
            '```html\n' +
            '<p class="center">I am some html content</p>' +
            '\n```');
    });

    it('should js/html/css', function () {
        expect(
            logAndReturn(md.css(css))
        ).to.equal(
            '```css\n' +
            '.center { margin-left: auto; margin-right: auto }' +
            '\n```');

    });

    it('should mapLines', function () {
        expect(
            logAndReturn(md.mapLines(lines, md.code, md.li))
        ).to.equal('- `line1`\n- `line2`');
    });

    it('should chain fns and then h1', function () {
        expect(
            logAndReturn(md.h1(code, md.code, md.st))
        ).to.equal('# ~~`md.strikethrough()`~~');
    });

});
