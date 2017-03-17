/*
 * Provide log out, delete, create new user list features as well as adding/deleting players 
 * from watched list.
 * Logout, home, roster all refer to this page. 
 */

var config = {
	    apiKey: "AIzaSyBoUFCtMwn6r63MEd8pfQLTMLp_h-KLkWY",
	    authDomain: "cse-134b-103ee.firebaseapp.com",
	    databaseURL: "https://cse-134b-103ee.firebaseio.com",
	    storageBucket: "cse-134b-103ee.appspot.com",
	    messagingSenderId: "737274665905"
	  };

var defaultApp = firebase.initializeApp(config);

function AddPlayerToList(AddedPerson){
	var userId = "EO1Ks5BQCFdK0Ys7Jk7hxSSzSON2";
	alert(AddedPerson);

}

var InitialPlayer = '{"Player3": {"name" : "Tom Brady", "position" : "Quarterback", "height" : "' + "5'" + '10", "age" : "34", "img" : "images/manziel.jpg", "team" : "patriots", "stats" :{"CUP" : "10", "ATT" : "113", "YDS" : "112", "CMP" : "52"}}}';
var initialArray = JSON.parse(InitialPlayer);
function createNewUserWatchlist(userID){
	firebase.database().ref('users/'+userID).set({
		UserWatchList:initialArray
	});
}

function DeleteSelectedPlayer(){
	var userId = sessionStorage.getItem('uid');
	var AllPlayers = document.getElementsByClassName("DeleteCheckBox");
	var z;
	firebase.database().ref('/users/' + userId).once('value').then(function(snapshot){
		var username = snapshot.val();
		for(var i in AllPlayers){
			if(AllPlayers[i].checked){
				z = i;				
			}
		}
		
		var count = 0;
        for(var x in username.UserWatchList) {
            if(username.UserWatchList.hasOwnProperty(x) && count == z) {
            	snapshot.child("UserWatchList").child(x).ref.remove();
				loadRemoveList();
            }
            count++;
        }
	});
}

var signout = function() {
	firebase.auth().signOut();
	window.location = './Login_pageBS.html';
}
