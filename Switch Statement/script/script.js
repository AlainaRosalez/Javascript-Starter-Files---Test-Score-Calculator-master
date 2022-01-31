var subject, totalQuestions, numCorrect, percentScore;


//ToDo - New Function
//! Declare a function named testResults(), this is called when the calculate button is clicked. 
function testResults(){
    subject = document.getElementById("subject").value;
    totalQuestions= document.getElementById("numberOfQuestions").value;
    numCorrect = document.getElementById("numberCorrect").value;

    percentScore = numCorrect/totalQuestions*100;
    percentScore = percentScore.toFixed(2);
   //// # of correct divided by # of questions times 100 equals percentage
    //Grades

    var GradeA = 90;
    var GradeB = 80;
    var GradeC = 70;
    var GradeD = 60;


    switch(true){
        case percentScore >= GradeA:
            document.getElementById("testResults").innerHTML = "A";
            document.getElementById("testMessage").innerHTML = `Excellent Job. You got ${percentScore}% correct. That's an 'A' for 'Awesome'.`
            break;

        case percentScore >= GradeB:
            document.getElementById("testResults").innerHTML = "B";
            document.getElementById("testMessage").innerHTML = `Good Job. You got ${percentScore}% correct. That's an 'B' for 'Bretty Good'.`
            break;

        case percentScore >= GradeC:
            document.getElementById("testResults").innerHTML = "C";
            document.getElementById("testMessage").innerHTML = `Meh. You got ${percentScore}% correct. That's an 'C' for 'Could be better'.`
            break;

        case percentScore >= GradeD:
            document.getElementById("testResults").innerHTML = "D";
            document.getElementById("testMessage").innerHTML = `What?. You got ${percentScore}% correct. That's an 'D' for 'Do better Yo'.`
            break;

        case percentScore < GradeD:
            document.getElementById("testResults").innerHTML = "F";
            document.getElementById("testMessage").innerHTML = `Go away. You got ${percentScore}% correct. That's an 'F' for 'Fail Nation'.`
            break;
//~use back tick (`)
        default:
            alert("This is default");

    }
}

//ToDo - this goes inside the testResults() function
    //! Add Switch Statement that checks the condition of the grade. For each grade change the out of the html id's of "testResults" and "testMessage".
    //? note you are just checking to see if a condition is true... so you may want to start with switch(true){}

  
//ToDo - New Function
// Create a function called clearResults() that resets the forms values. 
