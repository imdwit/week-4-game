$(document).ready(function(){

	var counter = 0;
	var numDisplayed ="";

	function getNumber(){
		var randomNumber= Math.floor((Math.random() * 120) + 19);
	}
		$('#number').text(numDisplayed);

		$('#redGem').click(function(){
			$('#total').click();
			counter = counter + parseInt($(this).value());
		});

		$('#tealGem').click(function(){
			$('#total').click();
			counter = counter + parseInt($(this).value());
		});

		$('#purpleGem').click(function(){
			$('#total').click();
			counter = counter + parseInt($(this).value());
		});

		$('#greenGem').click(function(){
			$('#total').click();
			counter = counter + parseInt($(this).value());
		});


}



