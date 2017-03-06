(function(){
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




console.log(typeof defaultApp); 
console.log(defaultApp.name);  // "[DEFAULT]"
const txtEmail = document.getElementById('txtemail');
const txtPassword = document.getElementById('txtpassword');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
// You can retrieve services via the defaultApp variable...
//var defaultStorage = defaultApp.storage();
var defaultDatabase = defaultApp.database();


//login event
btnLogin.addEventListener('click',e=>{
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	//sign in
	const promise = auth.signInWithEmailAndPassword(email,pass);
	promise.catch(e=> console.log(e.message));
})

btnLogout.addEventListener('click', e=>{
	firebase.auth().signOut();
})





function signin() {
	var email =document.forms["thisForm"]["email"].value;
	var password = document.forms["thisForm"]["password"].value;
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  if (errorCode == 'auth/invalid-email') {
	    alert('invalid email');
	  } else if(errorCode == 'auth/user-disabled') {
	  	alert('user disabled');
	  } else if(errorCode == 'auth/user-not-found') {
	  	alert('user not found');
	  } else if(errorCode == 'auth/wrong-password') {
	  	alert('wrong password');
	  } else {
	  	// window.location = "https://cse-134b-103ee.firebaseapp.com/homeBS.html";
	    //alert(errorMessage);
	  }
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
firebase.auth().onAuthStateChanged(user => {
  if(user) {
  	console.log(user);
    window.location = 'homeBS.html'; //After successful login, user will be redirected to home.html
  }
  else{
  	console.log('not logged in');
  }
});

}());