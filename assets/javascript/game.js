$(document).ready(function(){

	var counter = 0;
	var numDisplayed = "";
	numDisplayed = Math.floor((Math.random() * 101) + 19);
	console.log(numDisplayed);

	$('#number').text(numDisplayed);

	var red = Math.floor((Math.random() * 11) + 1);
	var teal = Math.floor((Math.random() * 11) + 1);
	var purple = Math.floor((Math.random() * 11) + 1);
	var green = Math.floor((Math.random() * 11) + 1);

	var wins = 0;
	var losses = 0;
	var total = 0;

	function winOne(){
		wins++;
		$('#wins').text(wins);
		reset();
	}

	function loseOne(){
		losses++;
		$('#losses').text(losses);
		reset();
	}

	$('#redGem').text(total)(function(){
		total = total + red;
		$('#yourTotal').text(total)();

			if (total === numDisplayed){
				winOne();
			} else if (total > numDisplayed){
				loseOne();
			}
	});

	$('#tealGem').text(total)(function(){
		total = total + teal;
		$('#yourTotal').text(total)();

			if (total === numDisplayed){
				winOne();
			} else if (total > numDisplayed){
				loseOne();
			}
	});

	$('#purpleGem').text(total)(function(){
		total = total + purple;
		$('#yourTotal').text(total)();

			if (total === numDisplayed){
				winOne();
			} else if (total > numDisplayed){
				loseOne();
			}
	});

	$('#greenGem').text(total)(function(){
		total = total + green;
		$('#yourTotal').text(total)();

			if (total === numDisplayed){
				winOne();
			} else if (total > numDisplayed){
				loseOne();
			}
	});

	function reset(){
		numDisplayed = Math.floor((Math.random() * 101) + 19);
		$('#number').text(numDisplayed);
		red = Math.floor((Math.random() * 11) + 1);
		teal = Math.floor((Math.random() * 11) + 1);
		purple = Math.floor((Math.random() * 11) + 1);
		green = Math.floor((Math.random() * 11) + 1);
		total = 0;
		$('#yourTotal').text(total);
	}

})
