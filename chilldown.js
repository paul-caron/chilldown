let codeBlock = false
let blockBuf = ""
function parseLine(str){
    if(str.search(/^```/)!=-1){
        if(!codeBlock){
            let clss = str.replace("```","")
            codeBuf="<pre><code class=\""+clss+"\">"
            codeBlock = !codeBlock
            return ""
        }else{
            codeBuf+="</code></pre>"
            codeBlock = !codeBlock
            return codeBuf
        }
    }
    if(!codeBlock){
    const regH1 = new RegExp("^\\s*#[^#]+")
    const regH2 = new RegExp("^\\s*##[^#]+")
    const regH3 = new RegExp("^\\s*###[^#]+")
    let index;
    if ((index=str.search(regH1))!=-1){
        str=str.replace(new RegExp("#"),"<h1>")
        str=str+"</h1><hr>"
        return str
    }else if ((index=str.search(regH2))!=-1){
        str=str.replace(new RegExp("##"),"<h2>")
        str=str+"</h2><hr>"
        return str
    }else if ((index=str.search(regH3))!=-1){
        str=str.replace(new RegExp("###"),"<h3>")
        str=str+"</h3><hr>"
        return str
    }
    //check for images
    const regImg = new RegExp("!\\[[^\\(\\)]*\\]\\([^\\[\\]]+\\)")
    if ((index=str.search(regImg))!=-1){
        const url = str.match(new RegExp("(?<=!\\[.*\\]\\()[^\\[\\]]+(?=\\))"))
        const alt = str.match(new RegExp("(?<=!\\[)[^\\(\\)]*(?=\\]\\(.+\\))"))
        str = str.replace(regImg, `<img alt="${alt}" src="${url}"/>`)
    }
    //check for links
    const regA = new RegExp("\\[.*\\]\\(.+\\)")
    if ((index=str.search(regA))!=-1){
        const url = str.match(new RegExp("(?<=\\().+(?=\\))"))
        const text = str.match(new RegExp("(?<=\\[).*(?=\\])"))
        str = str.replace(regA, `<a href="${url}">${text}</a>`)
    }
    //check if paragraph
    const regP = new RegExp("^\\s*[^#-]+")
    if ((index=str.search(regP))!=-1){
        str = "<p>"+str+"</p>"
    }
    //check for list item
    const regLi = new RegExp("^\\s*-.+")
    if ((index=str.search(regLi))!=-1){
        str = str.replace(new RegExp("^\\s*-"), "<li>")
        str = str+"</li>"
    }
    if(str.search(new RegExp("^\\s*$"))!=-1){
        str="<br>"
    }
    }else{
        codeBuf += str+"<br>"
        str=""
    }
    return str
}
exports.downToHTML = function(down){
    let lines=down.split("\n")
    let text=lines.map((line)=>parseLine(line))
    return text.join("")
}






