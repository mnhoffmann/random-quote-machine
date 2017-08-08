$(document).ready(function() {
	$.ajaxSetup({
		cache: false //needed in order to update quotes
	});

	function getNewQuote() {
		$.getJSON("//quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(data) {
			if(data[0].content.length > 120) {
				getNewQuote();
			}
			else{
				$("#quoteText").html(data[0].content);
				var quoteAuthor = " —" + data[0].title; 
				$("#quoteAuthor").html(quoteAuthor);
			}
		});
	}

	getNewQuote();//get a quote on first load
	
	$("#newQuoteButton").click(function() {
		getNewQuote();
	});

	$("#tweetButton").on('click', function(event) {
		event.preventDefault();	
		window.open("https://twitter.com/intent/tweet?text=" + "\"" + $("#quoteText").text() + "\""+ $("#quoteAuthor").text());
	});
  
  $("#mari").on('click', function(event) {
    window.open("https://twitter.com/mnhoffmann");
  });
});
