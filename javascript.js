//random Video

var videoID;
var informationVar;

function buttonClicked(){
	videoID = document.getElementById("videoIdElement").value;
	console.log(videoID);


		//random comment
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				var response = JSON.parse(xhttp.responseText);

				var randomComment = Math.floor(Math.random()*response.items.length);
				console.log(randomComment);

				var randomCommentText = response.items[randomComment].snippet.topLevelComment.snippet.textDisplay;
				console.log(randomCommentText);

				informationVar = "Author: "+ response.items[randomComment].snippet.topLevelComment.snippet.authorDisplayName+ "/ like count: "+ response.items[randomComment].snippet.topLevelComment.snippet.likeCount;

				document.getElementById("header").innerHTML = randomCommentText;
				document.getElementById("comment").innerHTML = "random comment: ";
				document.getElementById("info").innerHTML = "information: ";
				document.getElementById("information").innerHTML = informationVar;
				 
			}
		};

		xhttp.open("GET", "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId="+videoID+"&key=AIzaSyAxBMdV7XkQCYiAj5EvDti4_XiymvTTQfw", true);
		xhttp.send();
			
	}







