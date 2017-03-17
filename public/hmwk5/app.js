/*
 * JS file that sets up login authentication and provides
 * other login functionalities such as creation of list and
 * event/state handling
 */

 var config = {
 	apiKey: "AIzaSyBoUFCtMwn6r63MEd8pfQLTMLp_h-KLkWY",
 	authDomain: "cse-134b-103ee.firebaseapp.com",
 	databaseURL: "https://cse-134b-103ee.firebaseio.com",
 	storageBucket: "cse-134b-103ee.appspot.com",
 	messagingSenderId: "737274665905"
 };

 var defaultApp = firebase.initializeApp(config);

/*
 * Login/Signout functionalities and functions below
 */


 var signout = function() {
 	firebase.auth().signOut();
 	window.location = './Login_pageBS.html';
 }


 var signin = function() {
 	var email = document.getElementById('txtemail').value;
 	var pwd = document.getElementById('txtpassword').value;
 	firebase.auth().signInWithEmailAndPassword(email, pwd).catch(function(error) {
 		alert("Incorrect User ID or Password")
 	});
 }
 var googleSignin = function(){
 	var provider = new firebase.auth.GoogleAuthProvider();
 	firebase.auth().signInWithPopup(provider).then(function(result) {
 		var token = result.credential.accessToken;
 		var user = result.user;

 		console.log(token)
 		console.log(user)
 	}).catch(function(error) {
 		var errorCode = error.code;
 		var errorMessage = error.message;

 		console.log(error.code)
 		console.log(error.message)
 	});
 }

 /*
  * This is the creation of the initial watched list for users given a default value with Tom Brady
  */
 var InitialPlayer = '{"Player3" : {"age" : "34", "height" : "' + "6'" + '1", "img" : "images/tombrady.png", "team" : "Patriots", "name" : "Tom Brady", "position" : "Quarterback", "stats" : {"ATT" : "560", "CMP" : "357", "PCT" : "63.6", "YDS" : "3510"}}}';
 var initialArray = JSON.parse(InitialPlayer);
 function createNewUserWatchlist(userID){
 	firebase.database().ref('users/'+userID).set({
 		UserWatchList:initialArray
 	});
 }

 firebase.auth().onAuthStateChanged(function(user) {
 	if(user) {
 		console.log("hello");
 		console.log(user);
 		const rootRef = firebase.database().ref();
 		rootRef.once('value', function(snapshot) {
 			if (snapshot.hasChild("users/"+user.uid)) {
 			}
 			else
 			{
 				firebase.database().ref('/users/'+user.uid).set({
 					UserWatchList:[]
 				});
 			}
 		})
 		window.location = './homeBS.html';
 	}
 });
