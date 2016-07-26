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

	$('#redGem').click(function(){
		total = total + red;
		$('#yourTotal').click();
		
			if (total === numDisplayed){
				winOne();
			} else if (total > numDisplayed){
				loseOne();	
			}
	});

	$('#tealGem').click(function(){
		total = total + teal;
		$('#yourTotal').click();
		
			if (total === numDisplayed){
				winOne();
			} else if (total > numDisplayed){
				loseOne();	
			}
	});

	$('#purpleGem').click(function(){
		total = total + purple;
		$('#yourTotal').click();
		
			if (total === numDisplayed){
				winOne();
			} else if (total > numDisplayed){
				loseOne();	
			}
	});

	$('#greenGem').click(function(){
		total = total + green;
		$('#yourTotal').click();
		
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



