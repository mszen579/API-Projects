
$(document).ready(function(){
	$('#search-input').keyup(function(enterbutton){
		if(enterbutton.keyCode == 13){
			findResults();
		} 		
	});

$('#search-button').click(function() {
	findResults();		
  });
});

function findResults() {
	
$.ajax({
  url: 'https://pixabay.com/api/',
  method: 'GET',
  data: {
    key: '2409187-ee958c2d8895c6eb14d3ce314',
    q: $('#search-input').val(),  
	per_page:$('#mySelectNumber').val()
  },
	success: displayResults

		}
    );
}


function displayResults(reply){
  $('#results').empty();


if (reply.totalHits===0){
	$('#results').html('<p>No results, SORRY</p>');
	
} else {
	
	for (var i=0; i<reply.hits.length; i++){
		var image_url = reply.hits[i].webformatURL;
	    var img = $(document.createElement('img'));
		img.attr("src", image_url);
		
		$('#results').append(img);
		}
	}
}

