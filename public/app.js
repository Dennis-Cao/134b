
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



var signin = function() {
	var email = document.getElementById('txtemail').value;
	var pwd = document.getElementById('txtpassword').value;
	firebase.auth().signInWithEmailAndPassword(email, pwd).catch(function(error) {
    	alert("Incorrect combination")
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
var createNewUserWatchlist = function(userID){
	firebase.database().ref('users/'+userID).set({
			UserWatchList:[]
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
  			firebase.database().ref('users/'+user.uid).set({
				UserWatchList:[]
			});
  		}
  	})
  	// rootRef.child("users").observeSingleEventOfType(.Value, withBlock: { (snapshot) in

   //      if snapshot.hasChild(user.uid){
   //      	createNewUserWatchList(user.uid)

   //      }else{
   //      }


   //  })
    window.location = './homeBS.html';
  }

});

