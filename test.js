var cd = require ('./chilldown')


var markdown = `jrjr
rjjr
#helloworld
how is everyone doing today?

`
console.log(cd.downToHTML(markdown))
