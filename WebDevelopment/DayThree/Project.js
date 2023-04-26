function printlength() {
    var str = document.getElementById("name").value;
    var strlen = str.length;
    document.getElementById("demo").innerHTML = "Your Score is:" + strlen;
}