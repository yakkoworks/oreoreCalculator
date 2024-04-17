$(document).ready(function(){

    var statement = "";
    var answer = "";
    $(".key").click(calc);
    // $("#statement").on('input', inputCalc);
    
function calc() {
    // alert(this.innerHTML);
if(this.innerHTML.toString() == "BS") {
    statement = statement.slice(0,-1);
    $("#statement").val(statement);
    if(statement.length <= 0) {
        $("#statement").val("");
        $("#answer").val("");
    }
}
else  if(this.innerHTML.toString() == "CA") {
    statement = ""; 
    if(statement.length <= 0) {
        $("#statement").val("");
        $("#answer").val("");
    }
}
else{
    statement+=this.innerHTML.toString();
    $("#statement").val(statement);
}
answer = eval(statement);
$("#answer").val(answer);
}
})
function inputCalc(statement){
    var answer = eval(statement).toString();
    var inputAnswer = document.getElementById("answer");
    inputAnswer.setAttribute('value',answer);
}