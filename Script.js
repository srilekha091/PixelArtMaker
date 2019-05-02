// JS Code for Pixel Art Maker
$('#gridPicker').submit(function (event){
	var rows = $('#height').val();  
	var columns = $('#width').val();
	event.preventDefault();	
	gridMaker(rows, columns);
});

function gridMaker(rows, columns){
	$('tr').remove();
	for(var i = 1; i <= rows; i++){
		$('#gridTable').append('<tr id=table' + i + '> </tr>');
		for(var j = 1; j <= columns; j++){
			$('#table' + i).append('<td></td');
		}
	}
}

$("#gridTable").on("click", "td", function addColor(){
	var color = $('#colorPicker').val();
	console.log(color);

	if($(this).attr('style')){
		$(this).removeAttr('style');
	}
	else{
		$(this).attr('style', 'background-color:' + color);
	}
})
