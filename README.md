[2J[1;3H
```

`md.h1(text)`
# markdown generator


`md.h2(text)`
## markdown generator


`md.h3(text)`
### markdown generator


`md.st(text)`
~~markdown generator~~


`md.b(text)`
**markdown generator**


`md.i(text)`
*markdown generator*


`md.bq(text)`
> markdown generator


`md.li(text)`
- markdown generator


`md.sh(text)`
`$ markdown generator`


`md.code(code)`
`md.strikethrough()`


`md.ol(lines)`
1. line1
2. line2


`md.ol(lines, md.code)`
1. `line1`
2. `line2`


`md.ul(lines)`
- line1
- line2


`md.ul(lines, md.code)`
- `line1`
- `line2`


`md.js(code)`
```js
md.strikethrough()
```


`md.html(html)`
```html
<p class="center">I am some html content</p>
```


`md.css(css)`
```css
.center { margin-left: auto; margin-right: auto }
```


`md.mapLines(lines, md.code, md.li)`
- `line1`
- `line2`


`md.h1(code, md.code, md.st)`
# ~~`md.strikethrough()`~~



```


  19 passing (12ms)

