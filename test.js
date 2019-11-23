const cd = require ('./chilldown')

const markdown = `
# hello world
this is a paragraph. lorem ipsum sidor amet and all that jazz.

## hello world
this is a paragraph. nothing important is just another lorem ipsum yaba daba doo.

### hello world
MARKDOWN!
[![random picture](https://picsum.photos/200/300)](https://picsum.photos/200/300)
[link to some site](http://www.example.com)

###List
- one
- two
- three

&copy Paul Caron , aka ChillPill

`
console.log(cd.downToHTML(markdown))
