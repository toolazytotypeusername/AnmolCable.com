// var sixm, twelvem;

// sixm = document.getElementById("sixm");
// twelvem = document.getElementById("twelvem");

function display0()
{
    document.getElementById("twelvem").style.display = "none";
    document.getElementById("sixm").style.display = 'none';
}
function display6()
{
    document.getElementById("sixm").style.display = 'inline-flex';
    document.getElementById("twelvem").style.display = "none";
}

function display12()
{
    document.getElementById("sixm").style.display = 'none';
    document.getElementById("twelvem").style.display = "inline-flex";
}