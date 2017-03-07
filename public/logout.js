
var config = {
	    apiKey: "AIzaSyBoUFCtMwn6r63MEd8pfQLTMLp_h-KLkWY",
	    authDomain: "cse-134b-103ee.firebaseapp.com",
	    databaseURL: "https://cse-134b-103ee.firebaseio.com",
	    storageBucket: "cse-134b-103ee.appspot.com",
	    messagingSenderId: "737274665905"
	  };
	  //firebase.initializeApp(config);

	  // Initialize the default app
var defaultApp = firebase.initializeApp(config);

function AddPlayerToList(AddedPerson){
	var userId = "EO1Ks5BQCFdK0Ys7Jk7hxSSzSON2";
	alert(AddedPerson);

}

function DeleteSelectedPlayer(){
	//var CheckedBox = array[];
	var userId = "EO1Ks5BQCFdK0Ys7Jk7hxSSzSON2";
	var AllPlayers = document.getElementsByClassName("DeleteCheckBox");
	var z;
	firebase.database().ref('/users/' + userId).once('value').then(function(snapshot){
		var username = snapshot.val();
		for(var i in AllPlayers){
			if(AllPlayers[i].checked){
				//alert(i);
				//if(username.UserWatchList.hasOwnProperty(i)) {
				z = i;				
				//}
			}
		}
		
		var count = 0;
        for(var x in username.UserWatchList) {
            if(username.UserWatchList.hasOwnProperty(x) && count == z) {
            	snapshot.child("UserWatchList").child(x).ref.remove();
				loadRemoveList();
            }
            count++;
            // create the player button
        }
	});
}




					// function loadRoster() {
					// 	var userId = "EO1Ks5BQCFdK0Ys7Jk7hxSSzSON2";
					//   	//var userId = firebase.auth().currentUser.uid;
					// 	firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
					// 		var divRoster = document.getElementById("roster");
			  // 				var username = snapshot.val();
			  // 				var start = '<h5>Quarterbacks</h5>';
			  // 				var begAnchor = '<a href="player_statsBS.html">';
			  // 				var fig = '<figure>';
			  // 				var img = '<img src="images/generic.png" alt="Phillip Rivers Image Goes Here" height="42" width="42">';
			  // 				var begFig = '<figure>';
			  // 				var endFig = '</figure>';
			  // 				var endAnchor = '</a>';
		  	// 				for(x in username.UserWatchList) {
			  // 					//var name = username.UserWatchList[x].Player.name;
			  // 					start += begAnchor + fig + img + begFig + name + endFig + endAnchor;
			  // 					// create the player button
					// 		}
					// 		//divRoster.innerHTML = start;
					// 	});
					// }
					// loadRoster();


// console.log(typeof defaultApp); 
// console.log(defaultApp.name);  // "[DEFAULT]"
// var txtEmail = document.getElementById('txtemail');
// var txtPassword = document.getElementById('txtpassword');
// const btnLogin = document.getElementById('btnLogin');
// const btnLogout = document.getElementById('btnLogout');
// You can retrieve services via the defaultApp variable...
//var defaultStorage = defaultApp.storage();
// var defaultDatabase = defaultApp.database();


//login event
// btnLogin.addEventListener('click',e=>{
// 	const email = txtEmail.value;
// 	const pass = txtPassword.value;
// 	const auth = firebase.auth();
// 	//sign in
// 	const promise = auth.signInWithEmailAndPassword(email,pass);
// 	promise.catch(e=> console.log(e.message));
// })

// btnLogout.addEventListener('click', e=>{
// 	firebase.auth().signOut();
// })

var signout = function() {
	firebase.auth().signOut();
	window.location = './Login_pageBS.html';
}






// var provider = new firebase.auth.GoogleAuthProvider();
// function googleSignin() {
//    firebase.auth()
   
//    .signInWithPopup(provider).then(function(result) {
//       var token = result.credential.accessToken;
//       var user = result.user;
		
//       console.log(token)
//       console.log(user)
//    }).catch(function(error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
		
//       console.log(error.code)
//       console.log(error.message)
//    });
// }