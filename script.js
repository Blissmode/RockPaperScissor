var timeout;
var x=event.keyCode || event.which;

function animater()
{
    timeout=setInterval(rock, 1000);
}

function rock()
{
    document.getElementById("gameName").display="block";
    document.getElementById("gameName").innerHTML="ROCK!";
    clearInterval(timeout);
    timeout=setInterval(paper, 1000);
}

function paper()
{
    document.getElementById("gameName").display="block";
    document.getElementById("gameName").innerHTML="PAPER!";
    clearInterval(timeout);
    timeout=setInterval(scissor, 1000);
}

function scissor()
{
    document.getElementById("gameName").display="block";
    document.getElementById("gameName").innerHTML="SCISSOR!";
    clearInterval(timeout);
    document.getElementById("nextPage").innerHTML="press <kbd>ENTER</kbd> to continue";
    timeout=setInterval(rock, 1000);
}