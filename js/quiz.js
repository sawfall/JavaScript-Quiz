//check answer for each question
//check if all questions are answered or not - alert box to notigy if not
//if all answers are there then give final socre


//for question one
function submitAnswers(){
	var total = 5;
	var score = 0;

	//get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	

	
	//validate that all questions are answered

	for(var i=1; i<=total; i++){
		if(eval('q'+i) == null || eval('q'+i) ==''){
			alert('You missed question ' + i );
			return false;
	}
	

	}

	var ans = ["c", "d", "b", "c", "b"];

	for(var i=1; i<=total; i++){
		
			if(eval('q'+i) == ans[i-1]){
				score++;
		}
		
	}
	


	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+' </span> </h3>';
	alert('You scored '+score+ ' out of '+total+'.');

	return false;

}