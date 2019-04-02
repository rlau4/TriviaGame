var correct = 0


function checker() {
    var question1result1 = document.getElementById('question-1-result-1');
    var question1resutlt2 = document.getElementById('question-1-result-2');
    var question1result3 = document.getElementById('question-1-result-3');
    var question2result1 = document.getElementById('question-2-result-1');
    var question2result2 = document.getElementById('question-2-result-2');
    var question2result3 = document.getElementById('question-2-result-3');
    var question3result1 = document.getElementById('question-3-result-1');
    var question3result2 = document.getElementById('question-3-result-2');
    var question3result3 = document.getElementById('question-3-result-3');
    var question4result1 = document.getElementById('question-4-result-1');
    var question4result2 = document.getElementById('question-4-result-2');
    var question4result3 = document.getElementById('question-4-result-3');
    var question5result1 = document.getElementById('question-5-result-1');
    var question5result2 = document.getElementById('question-5-result-2');
    var question5result3 = document.getElementById('question-5-result-3');
    var question6result1 = document.getElementById('question-6-result-1');
    var question6result2 = document.getElementById('question-6-result-2');
    var question6result3 = document.getElementById('question-6-result-3');
    var question7result1 = document.getElementById('question-7-result-1');
    var question7result2 = document.getElementById('question-7-result-2');
    var question7result3 = document.getElementById('question-7-result-3');


    if(question1resutlt2.checked == true){
        correct++;
    
    }
    if(question2result2.checked == true){
        correct++;
    }
    if(question3result3.checked == true){
        correct++;
    }
    if (question4result1.checked == true){
        correct++;
    }
    if(question5result1.checked == true){
        correct++;
    }
    if(question6result2.checked == true){
        correct++;
    }
    if(question7result2.checked == true){
        correct++;
    }

    if (correct <= 4){
        $("#result").append("<div>", "You should study a little harder!", "<br>")
    }
    else if( correct <= 6){
        $("#result").append("<div>", "You really know your stuff!", "<br>")
    }
    else if( correct == 7) {
        $("#result").append("<div>", "You're an MVP! You got them all correct!", "<br>")
    }
    
    
$("#result").prepend("You got " + correct + " out of 7 correct!")
stop()
};

setTimeout(checker, 1000* 100);

var number = 100;
var intervalId;

function run(){
    clearInterval(intervalId);
    intervalId=setInterval(decrement, 1000);
}

function decrement() {
    number --;
    $("#timer-div").html("<h2>"+ "You have "+ number +" seconds left!" + "</h2>" + "<br>"+ "<br>" );
    if (number === 0) {
        stop();
    }
}

function stop(){
    clearInterval(intervalId);
    $("#timer-div").html("<h2>" + "Times Up!" + "</h2>")
}
run();

