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

###codeBlock
```cpp
#include &lt; iostream &gt; 
#include &lt; markdown &gt; 

function helloWorld(){
    while(1){
        std::cout &lt;&lt; "What am I "
                     "supposed "
                     "to say. "
                     "Sorry, "
                     "I forgot.";
    }
}
```
&copy Paul Caron , aka ChillPill

`
console.log(cd.downToHTML(markdown))
