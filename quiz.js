function checkAnswer(){
	const correctAnswer = 4;
	const userAnswer = Number(document.querySelector("input[name='quiz']:checked").value);
	if(userAnswer === correctAnswer){
		document.getElementById("feedback").textContent = "Correct! Well done.";
	}
	else{
		document.getElementById("feedback").textContent = "That's incorrect. Try again!";
	}

}
let submit_btn = document.getElementById("submit-answer");
	submit_btn.addEventListener("click", checkAnswer);