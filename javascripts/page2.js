$(document).ready(function(){

	$('#myButton').prop("disabled",true);

	$('#myNumber').on('change keyup', function(){
		var myNum = $('#myNumber').val();

		if(myNum.length) {
			$('#myButton').prop("disabled",false);
		} else {
			$('#myButton').prop("disabled",true);
		}
	})


	$('#myButton').click(function(){

		//alert(myNum);

	});
});