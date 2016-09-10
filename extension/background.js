var scroll_val = window.pageYOffset ;
var scroll_val = 0 ;
var censored_str = '<img alt="ext-icon.png" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QjhBQjE3NjZERTcxMUU2QkE2Mzk0OTNBNzdBMTBDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QjhBQjE3NzZERTcxMUU2QkE2Mzk0OTNBNzdBMTBDQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUwMTdGODdGNkRFNzExRTZCQTYzOTQ5M0E3N0ExMENBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUwMTdGODgwNkRFNzExRTZCQTYzOTQ5M0E3N0ExMENBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+a8pVwwAAArtJREFUeNpcUztoU2EUPvcR86qxeaghUDCPWjM4CRlSpR0UN0OIZOiQLFmUbG1XHYVOLdgho8UWfFAKhQ6FgGmbpRVL3WwQioixtilNWm+Tm5ff+U1C9MDP/e855zvnO4+fbDYbWa1W48DAwGeTyVSyWCwO+k8kSSJVVclutzvg+x3nq8fjuSbLMsmXIDAup1Kp4PT0tAO/SzhSfwDYhxBks9Vq5ScnJz3pdNprMBjesknmBBcXF0Gn06n6/X6KRqMPwepFf4B6vd5qt9t3I5HILZ/PJ8FXKhaLHuhI7VDUG42GoDo6OkqFQuHJ9vb2pyYEujYYeUKhUHN8fFzpBCRFURr8VRGlCWptNsBfBInH47ZSqfRG13XBABkpkUgIe1cYw1jVaDRakEFmIAszQTMJtf7TSNYzZWQWSYDj8i0Kur+VTCaDqE1G1F4AvjOg/zADJGMwBQKBK7u7uxNyrVYb5gbymNgwNjZG6+vrhMZSlxXbeNzhcJjW1taEzuVyGYD1y90GNqCsIkM+n6dsNiuY8Jz5u7e3R5qm0cbGBn3I5UgHuxoON1jt1uhFbeflMj3LZIjHyWWwMHVMhdxuN71aWKDbIyN0E4x+Qc9NUNudTbuH7EaAqlNTdAL6TJuz86hisZi4P02nachspgfA/Py7AxKXYGJnCXTBmcqnp/Ryfr7XxNnZWapUKqKEmZkZKoMl+zGGS1TdzuuJ1eXVpRsTj81u11Wqg823gwPhzHKA+9zcnAh2WCxSzWCgVQTLLC4e1oliksvuQqHNR3fCodfRWPyyCb3AFtLZ2ZkIwGPrLtTg4CB5fT56v7Jy8nFnJ65rWlYhRSK9XvtS/X1+X5FV7/HxkQDhxRFephgtf/kw7cL+/o+tXO55VdPeMSsxX3SRHYZ5krzRncNpj3gJ+3Qt1L2Jl9jb0D8CDAAtGkr89XB+aAAAAABJRU5ErkJggg==" />';

// For Cat gif
for(var i=0 ; i< 15 ;i++){
	censored_str = censored_str+" "+censored_str;
};

// Generating tweet array from twitter news feed
function generate_tweet_array(){

	var tweet_array = [];

    $(".js-stream-item.stream-item.stream-item").each(function(){
    	if(!$.cookie($(this).find('div').attr('data-tweet-id')) && 
    		$(this).find('div').find('.TweetTextSize').text() !== censored_str){
    		var tweet_obj = {
		        "data-tweet-id" : $(this).find('div').attr('data-tweet-id'),
		        "data-user-id" : $(this).find('div').attr('data-user-id'),
		        "data-permalink-path" : $(this).find('div').attr('data-permalink-path'),
		        "data-screen-name" : $(this).find('div').attr('data-screen-name'),
		        "data-you-follow" : $(this).find('div').attr('data-you-follow'),
		        "data-follow-you" : $(this).find('div').attr('data-follows-you'),
		        "tweet-text" : $(this).find('div').find('.TweetTextSize').text(),
		    };
		    tweet_array.push(tweet_obj);
	    }
    });

    console.log(JSON.stringify(tweet_array));

    if(tweet_array && tweet_array.length > 0){
    	send_ajax_request(tweet_array);
    }

};

// For sending ajax request to server with tweets
function send_ajax_request(tweet_array){
		console.log("here 111111")
    	$.ajax({
	        url: "https://seqhack.faasos.io/make_predictions_api",
	        type: "POST",
	        data: JSON.stringify(tweet_array),
	        dataType:"json",
	        contentType: "application/json; charset=utf-8",
	        success: function (result) {
	        	if(result && result.length > 0){
	        		blocked_content(result);
	        	}
	        },
	        error: function (request, status, error) {
	          console.log("Error", error);
	        }
    	})

};

// For blocking content based on lable
function blocked_content(tweet_result_arr){

        for(var i=0 ; i < tweet_result_arr.length ; i++){
            if(tweet_result_arr[i].label == "neg"){
            	console.log("-------",censored_str)
              $("div").find("[data-tweet-id='"+tweet_result_arr[i]["data-tweet-id"]+"']")
              .find('.TweetTextSize').html(censored_str);
              /*$("div").find("[data-tweet-id='"+tweet_result_arr[i]["data-tweet-id"]+"']")
              .find('.js-tweet-text-container').next().html("");*/
            }
            $.cookie(tweet_result_arr[i]["data-tweet-id"], JSON.stringify(tweet_result_arr[i]), { expires : 1 });
  	  	}

};

// Inital call
generate_tweet_array();

// For twitter onclick events
$(document).ready(function() {

	// For New Tweets
	$(document).on("click", ".new-tweets-bar.js-new-tweets-bar", function(){
		generate_tweet_array();
	});

	// For Notification and Home nevigation
	$(document).on("click", ".js-nav.js-tooltip.js-dynamic-tooltip", function(){
		generate_tweet_array();
	});

});

// On scroll page
$(document).scroll(function() {
   var scrollPosition = $(this).scrollTop();  
   if(parseInt(scrollPosition) - parseInt(scroll_val) > 9000){
   	generate_tweet_array();
   	scroll_val = scrollPosition ;
   }
});
