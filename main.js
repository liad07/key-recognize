window.addEventListener('keydown', function (e) {
    if (e.key==" "){
        document.querySelector('p').innerHTML = `You pressed ${"space"}`
        var x=document.getElementById("title").innerHTML="space"

    }
    else{
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    var x=document.getElementById("title").innerHTML=e.key
    }
}, false);
