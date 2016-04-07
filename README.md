

  md
# markdown generator
    ✓ should h1
## markdown generator
    ✓ should h2
## markdown generator
    ✓ should h3
~~markdown generator~~
    ✓ should st
**markdown generator**
    ✓ should b/strong
*markdown generator*
    ✓ should i/em
> markdown generator
    ✓ should bq
- markdown generator
    ✓ should li
$ markdown generator
    ✓ should sh/shell
`md.strikethrough()`
    ✓ should code
1. line1
2. line2
    ✓ should ol
1. `line1`
2. `line2`
    ✓ should ol after code
- line1
- line2
    ✓ should ul
- `line1`
- `line2`
    ✓ should ul after code
```js
md.strikethrough()
```
    ✓ should js
```html
<p class="center">I am some html content</p>
```
    ✓ should js/html/css
```css
.center { margin-left: auto; margin-right: auto }
```
    ✓ should js/html/css
- `line1`
- `line2`
    ✓ should mapLines
# ~~`md.strikethrough()`~~
    ✓ should chain fns and then h1


  19 passing (16ms)

