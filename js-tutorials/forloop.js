for(var i=0;i<5;i++){
    document.write(`<p>${i}</p>`)
}
document.write('<hr>')

var end = parseInt(prompt("ENTER END VALUE"))
for (var i = 1; i <= end; i++) {
    if(i%2 == 0)    {
        document.writeln(`<p class='even'>${i}</p>`)
    }else{
        document.writeln(`<p class='odd'>${i}</p>`)
    }
}