var cd = require ('./chilldown')


var markdown = `
#helloworld
how is everyone doing today?

##helloworld
another paragraph

###list
- one
- two
- three



`
console.log(cd.downToHTML(markdown))
