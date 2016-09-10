var scroll_val = window.pageYOffset ;
var censored_str = "*************************";
var scroll_val = 0 ;


// Generating tweet array from twitter news feed
function generate_tweet_array(){

	var tweet_array = [];

    $(".js-stream-item.stream-item.stream-item").each(function(){
    	if(!$.cookie($(this).find('div').attr('data-tweet-id')) && $(this).find('div').find('.TweetTextSize').text() !== censored_str){
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
              $("div").find("[data-tweet-id='"+tweet_result_arr[i]["data-tweet-id"]+"']").find('.TweetTextSize').text(censored_str);
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
