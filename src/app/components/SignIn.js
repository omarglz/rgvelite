import React from 'react';
import * as firebase from 'firebase';

export class SignIn extends React.Component {
	componentWillMount() {
	    this.authListener = this.authListener.bind(this);
	    this.authListener();
	}

	loginWithPass(email,password) {
		firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  if (errorCode === 'auth/wrong-password') {
		    alert('Wrong password.');
		  } else if (errorCode === 'auth/invalid-email' || errorCode === 'auth/user-not-found') {
		  	alert('Wrong email.');
		  } else {
		    alert(errorMessage);
		  }
		  console.log(error);
		});
	}

	authListener() {
		this.fireBaseListener = firebase.auth().onAuthStateChanged((user) => {
	      if (user) {
	   //      this.setState({
				// User: { id: user.uid }
	   //      });
			window.location.href = "../admin";

	      } else {
	        // No user is signed in.
	      }
	    });
	}

	componentWillUnmount() {
		this.fireBaseListener && this.fireBaseListener();
		this.authListener = undefined;
	}



	render() {
	    return (
			<main className="pa4 black-80">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 ba b--black bg-transparent grow pointer f6 dib" 
			      	value="Sign in" onClick={() => this.loginWithPass(document.getElementById("email-address").value, document.getElementById("password").value)}
			      />
			    </div>
			  </form>
			</main>
		);
	}
}